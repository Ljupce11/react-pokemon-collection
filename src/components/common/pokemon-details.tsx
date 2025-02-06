import type { PokemonData } from "@/types/types";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

type Props = {
  index: number;
  pokemonData: PokemonData;
};

export const PokemonDetails = ({ index, pokemonData }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-4">
        <img
          loading="lazy"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          alt={pokemonData.name}
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold capitalize">
            {pokemonData.name}
          </h1>
          <div className="flex items-center gap-2">
            {pokemonData.types.map(({ type }) => (
              <Badge className="capitalize" variant="outline" key={type.name}>
                {type.name}
              </Badge>
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`}
          alt={pokemonData.name}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="flex flex-col gap-2">
          <CardContent>
            <p className="font-semibold">Base Experience</p>
            <p>{pokemonData.base_experience}</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardContent>
            <p className="font-semibold">Height</p>
            <p>{pokemonData.height}</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardContent>
            <p className="font-semibold">Weight</p>
            <p>{pokemonData.weight}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col gap-2">
          {pokemonData.stats.map(({ stat, base_stat }) => (
            <div className="flex flex-col gap-2" key={stat.name}>
              <p className="text-sm text-muted-foreground uppercase">
                {stat.name}
              </p>
              <Progress
                aria-label={`${stat.name}: ${base_stat}`}
                value={base_stat}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
