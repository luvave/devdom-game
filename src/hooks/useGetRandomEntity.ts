import { useEffect, useState } from 'react';
import { MostRelatedEntity } from '../types/relatedEntities';
import { BasicError } from '../types/errors';
import { getRandomEntityName } from '../utils/SparqlClient';
import { getNameFromUri } from '../constants/sparql';

interface UseGetRandomEntityRet {
  loading: boolean;
  error: BasicError | null;
  randomEntity: string | undefined;
  getNewRandomEntity: () => string;
}

export const useGetRandomEntity: () => UseGetRandomEntityRet = () => {
  const [currentEntities, setCurrentEntities] = useState<MostRelatedEntity[]>([]);
  const [currentEntityIdx, setCurrentEntityIdx] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<BasicError | null>(null);

  const getNewRandomEntity = () => {
    if (currentEntities.length > 0 && !loading) {
      const newIdx = currentEntityIdx + 1;
      if (newIdx + 1 < currentEntities.length) {
        setCurrentEntityIdx(newIdx);
        return getNameFromUri(currentEntities[newIdx].entity.value);
      }
    }
    return 'Pinocchio';
  };

  const fetchRandomEntities = async () => {
    setLoading(true);
    try {
      const results = await getRandomEntityName(Math.floor(Math.random() * 10000));
      setCurrentEntities(results);
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
    fetchRandomEntities();
  }, []);

  return {
    loading,
    error,
    getNewRandomEntity,
    randomEntity: currentEntities.length > 0 ? getNameFromUri(currentEntities[currentEntityIdx].entity.value) : 'Pinocchio',
  };
};
