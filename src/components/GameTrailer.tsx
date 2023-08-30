import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameTrailer;
