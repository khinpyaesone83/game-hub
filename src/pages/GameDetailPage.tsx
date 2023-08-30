import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
