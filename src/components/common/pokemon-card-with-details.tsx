import { usePokemonDetails } from "@/hooks/use-pokemon-details";
import type { PokemonData } from "@/types/types";
import { PokemonDetailsSkeleton } from "../skeletons/pokemon-details-skeleton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { PokemonCard } from "./pokemon-card";
import { PokemonDetails } from "./pokemon-details";

type Props = {
  pokemon: PokemonData;
  index: number;
};

export const PokemonCardWithDetails = ({ pokemon, index }: Props) => {
  const { isOpen, handleOpen, pokemonData, isLoading } = usePokemonDetails(
    pokemon.name,
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <div>
          <PokemonCard pokemon={pokemon} index={index} />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pokemon details</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {isLoading ? (
          <PokemonDetailsSkeleton />
        ) : !pokemonData ? (
          <p className="text-center text-lg text-muted-foreground py-10">
            No data found
          </p>
        ) : (
          <PokemonDetails index={index} pokemonData={pokemonData} />
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
