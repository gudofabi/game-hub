import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const skeletonLoadingCard = () => {
    return skeletons.map((skeleton) => (
      <GameCardContainer key={skeleton}>
        <GameCardSkeletons />
      </GameCardContainer>
    ));
  };

  const gameCardData = () => {
    return data.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCard game={game} />
      </GameCardContainer>
    ));
  };

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading ? skeletonLoadingCard() : gameCardData()}
    </SimpleGrid>
  );
}

export default GameGrid;
