import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Pokemon } from "@/types/types";

type CollectionStore = {
  collection: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemonName: string) => void;
  isPokemonInCollection: (pokemonName: string) => boolean;
  clearCollection: () => void;
};

const useCollectionStore = create<CollectionStore>()(
  persist(
    (set, get) => ({
      collection: JSON.parse(localStorage.getItem("collection") || "[]"),

      addPokemon: (pokemon) => {
        const isExisting = get().isPokemonInCollection(pokemon.name);
        if (isExisting) return;

        set((state) => ({
          collection: [...state.collection, pokemon],
        }));
      },

      removePokemon: (pokemonName) => {
        set((state) => ({
          collection: state.collection.filter(
            (pokemon) => pokemon.name !== pokemonName,
          ),
        }));
      },

      isPokemonInCollection: (pokemonName) => {
        return get().collection.some((pokemon) => pokemon.name === pokemonName);
      },

      clearCollection: () => {
        set({ collection: [] });
      },
    }),
    {
      name: "pokemon-storage",
    },
  ),
);

export default useCollectionStore;
