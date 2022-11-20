import { useEffect, useState } from 'react';
import { BasicError } from '../types/errors';
import { MostRelatedEntity } from '../types/relatedEntities';
import { getMostRelatedEntities, getSingleEntity } from '../utils/SparqlClient';
import { getNameFromUri } from '../constants/sparql';

interface Props {
  initialEntityName: string;
  numberOfEntities: number;
}

interface UseMostRelatedEntitiesRet {
  loading: boolean;
  error: BasicError | null;
  data: MostRelatedEntity[] | null;
}

export const useMostRelatedEntities: (props: Props) => UseMostRelatedEntitiesRet = (
  { numberOfEntities, initialEntityName }: Props,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<BasicError | null>(null);
  const [data, setData] = useState<MostRelatedEntity[] | null>(null);

  const getMostRelatedEntitiesSet = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      let currentName = initialEntityName;
      const newData: MostRelatedEntity[] = [];
      const initial = await getSingleEntity(initialEntityName);
      initial.entity.value = getNameFromUri(initial.entity.value);
      newData.push(initial);
      // eslint-disable-next-line no-plusplus
      for (let i = 1; newData.length <= numberOfEntities; i++) {
        // TODO: Fix await inside loops and maybe refactor logic
        // eslint-disable-next-line no-await-in-loop
        const result = await getMostRelatedEntities(currentName);
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        result.every((res) => {
          if (!newData.find((ent) => ent.entity.value === getNameFromUri(res.entity.value))) {
            currentName = getNameFromUri(res.entity.value);
            res.entity.value = currentName;
            newData.push(res);
            return false;
          }
          return true;
        });
      }
      setData(newData);
    } catch (e: any) {
      setError({
        title: 'Error',
        message: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMostRelatedEntitiesSet();
  }, [initialEntityName]);

  return {
    loading,
    error,
    data,
  };
};
