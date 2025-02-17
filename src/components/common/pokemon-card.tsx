import { getPokemonImageUrl } from "@/lib/utils";
import type { PokemonData } from "@/types/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { AddToCollectionButton } from "./add-to-collection-button";
import { PokemonSprite } from "./pokemon-sprite";

type Props = {
  pokemon: PokemonData;
  index: number;
};

export const PokemonCard = ({ pokemon, index }: Props) => {
  return (
    <Card className="transition-transform hover:scale-105 cursor-pointer">
      <CardHeader>
        <PokemonSprite
          src={getPokemonImageUrl(index + 1)}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto"
        />
      </CardHeader>
      <Separator />
      <CardContent className="flex justify-between items-center">
        <p className="capitalize font-semibold">{pokemon.name}</p>
        <AddToCollectionButton pokemon={pokemon} index={index} />
      </CardContent>
    </Card>
  );
};
