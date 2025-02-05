import { Button } from "@/components/ui/button";
import useCollectionStore from "@/store/useCollectionStore";
import { Check, Plus } from "lucide-react";

interface Props {
  pokemon: {
    name: string;
  };
}

export const AddToCollectionButton = ({ pokemon }: Props) => {
  const { addPokemon, isPokemonInCollection } = useCollectionStore();
  const isInCollection = isPokemonInCollection(pokemon.name);

  const handleAddToCollection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPokemon(pokemon);
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
      {isInCollection ? <Check size={14} /> : <Plus size={14} />}
      {isInCollection ? "In collection" : "Add to collection"}
    </Button>
  );
};
