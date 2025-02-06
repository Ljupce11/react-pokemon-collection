export type PokemonType = {
  type: { name: string };
};

export type PokemonStat = {
  stat: { name: string };
  base_stat: number;
};

export type PokemonData = {
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  base_experience: number;
};

export type PokemonResponse = {
  count: number;
  results: PokemonData[];
};
