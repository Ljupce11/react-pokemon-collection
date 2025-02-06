import type { PokemonData } from "@/types/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { AddToCollectionButton } from "./add-to-collection-button";

type Props = {
  pokemon: PokemonData;
  index: number;
};

export const PokemonCard = ({ pokemon, index }: Props) => {
  return (
    <Card className="transition-transform hover:scale-105 cursor-pointer">
      <CardHeader>
        <img
          loading="lazy"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto"
        />
      </CardHeader>
      <Separator />
      <CardContent className="flex justify-between items-center">
        <p className="capitalize font-semibold">{pokemon.name}</p>
        <AddToCollectionButton pokemon={pokemon} />
      </CardContent>
    </Card>
  );
};
