import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        height="100vh"
      >
        <Spinner />
      </Box>
    );

  if (error) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game?.id || 0} />
      <GameScreenshots gameId={game?.id || 0} />
    </Box>
  );
};

export default GameDetailPage;
