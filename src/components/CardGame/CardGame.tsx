import { useState } from 'react';
import { RoundCounter } from './RoundCounter';
import { Timeline } from './Timeline';
import { Card } from './Card';
import { useMostRelatedEntities } from '../../hooks/useMostRelatedEntities';

export const CardGame = () => {
  const [round, setRound] = useState<number>(1);
  const { data } = useMostRelatedEntities({
    numberOfEntities: 4,
    initialEntityName: 'Photon',
  });

  return (
    <>
      <RoundCounter currentRound={round} />
      <Timeline />
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
