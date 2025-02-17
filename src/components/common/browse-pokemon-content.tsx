import { BrowsePokemonSkeleton } from "../skeletons/browse-pokemon-skeleton";

import type { PokemonData } from "@/types/types";
import { PokemonCardWithDetails } from "./pokemon-card-with-details";

type Props = {
  isLoading: boolean;
  pokemon: PokemonData[];
};

export const BrowsePokemonContent = ({ isLoading, pokemon }: Props) => {
  if (isLoading) {
    return <BrowsePokemonSkeleton />;
  }

  if (pokemon.length === 0) {
    return (
      <div className="col-span-full text-center text-gray-500">
        No pokemon found
      </div>
    );
  }

  return (
    <>
      {pokemon.map((pokemon, index) => (
        <PokemonCardWithDetails
          key={pokemon.name}
          pokemon={pokemon}
          index={index}
        />
      ))}
    </>
  );
};
