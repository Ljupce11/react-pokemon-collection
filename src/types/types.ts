export type PokemonType = {
  type: { name: string };
};

export type PokemonStat = {
  stat: { name: string };
  base_stat: number;
};

export type PokemonData = {
  id: number;
  selected: boolean;
  status: "wantToTrain" | "training" | "completedTraining";
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  base_experience: number;
  notes: string;
};

export type PokemonResponse = {
  count: number;
  results: PokemonData[];
};

export type MyCollectionDialogState = {
  type: "notes" | "edit" | "remove" | null;
  pokemon: PokemonData | null;
};

export type EditPokemonFormData = {
  name: PokemonData["name"];
  status: PokemonData["status"];
};

export type Stats = {
  title: string;
  value: number;
  progress: string;
  icon: "archive" | "XP" | "dumbbell" | "swords";
};
