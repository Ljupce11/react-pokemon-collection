import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCollectionStore from "@/store/useCollectionStore";
import type { PokemonData } from "@/types/types";

type Props = {
  pokemon: PokemonData;
  index: number;
};

export const AddToCollectionButton = ({ pokemon, index }: Props) => {
  const { addPokemon, isPokemonInCollection } = useCollectionStore();
  const isInCollection = isPokemonInCollection(pokemon.name);

  const handleAddToCollection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPokemon({ ...pokemon, id: index + 1, status: "wantToTrain" });
  };

  return (
    <Button
      disabled={isInCollection}
      onClick={handleAddToCollection}
      aria-label={
        isInCollection
          ? "Pokemon is in collection"
          : "Add pokemon to collection"
      }
      variant={isInCollection ? "ghostSuccess" : "outline"}
    >
      {isInCollection && <Check size={14} />}
      {isInCollection ? "In collection" : "Add to collection"}
    </Button>
  );
};
