interface Props {
  currentRound: number;
}

export const RoundCounter = ({ currentRound }: Props) => (
  <div className="container flex justify-center my-10 text-3xl">
    <p className="font-bold ...">{`Current round: ${currentRound}`}</p>
  </div>
);
