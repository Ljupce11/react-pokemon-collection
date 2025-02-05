import { Link } from "react-router";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { AddToCollectionButton } from "./add-to-collection-button";

type Props = {
  pokemon: { name: string };
  index: number;
};

export const PokemonCard = ({ pokemon, index }: Props) => {
  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      key={pokemon.name}
      className="transition-transform hover:scale-105"
    >
      <Card>
        <CardHeader>
          <img
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
    </Link>
  );
};
