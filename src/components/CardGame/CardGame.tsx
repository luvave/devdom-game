import { useState } from 'react';
import { RoundCounter } from './RoundCounter';
import { Card } from './Card';
import { useMostRelatedEntities } from '../../hooks/useMostRelatedEntities';
import { OutlinedButton } from '../Buttons/OutlinedButton';
import { useGetRandomEntity } from '../../hooks/useGetRandomEntity';

export const CardGame = () => {
  const [round, setRound] = useState<number>(1);
  const [currentEntity, setCurrentEntity] = useState<string>('Pinocchio');
  const { getNewRandomEntity } = useGetRandomEntity();
  const { data } = useMostRelatedEntities({
    numberOfEntities: 4,
    initialEntityName: currentEntity,
  });

  return (
    <>
      <RoundCounter currentRound={round} />
      <div className="container flex justify-center">
        <OutlinedButton
          title="Get new random entity"
          onClick={() => setCurrentEntity(getNewRandomEntity())}
        />
      </div>
      <div className="container flex flex-row mx-auto px-4">
      {Array.isArray(data) && data.map((val) => (
        <Card
          key={val.entity.value}
          title={val.entity.value}
          imgSrc={val.image.value}
          buttonText="hehe"
          description={val.abs.value}
          onBtnClick={() => setRound((prevState) => prevState + 1)}
        />
      ))}
      </div>
    </>
  );
};
