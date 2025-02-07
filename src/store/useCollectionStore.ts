import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { PokemonData } from "@/types/types";

type CollectionStore = {
  collection: PokemonData[];
  addPokemon: (pokemon: PokemonData) => void;
  removePokemon: (pokemonName: string) => void;
  isPokemonInCollection: (pokemonName: string) => boolean;
  selectPokemonToggle: (pokemonName: string) => void;
  selectAllPokemonToggle: () => void;
  updatePokemonNotes: (pokemonName: string, notes: string) => void;
  updatePokemon: (
    pokemonName: string,
    status: PokemonData["status"],
    name: string,
  ) => void;
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

      selectPokemonToggle: (pokemonName) => {
        set((state) => ({
          collection: state.collection.map((pokemon) =>
            pokemon.name === pokemonName
              ? { ...pokemon, selected: !pokemon.selected }
              : pokemon,
          ),
        }));
      },

      selectAllPokemonToggle: () => {
        set((state) => ({
          collection: state.collection.map((pokemon) => ({
            ...pokemon,
            selected: !state.collection.every((pokemon) => pokemon.selected),
          })),
        }));
      },

      updatePokemonNotes: (pokemonName, notes) => {
        set((state) => ({
          collection: state.collection.map((pokemon) =>
            pokemon.name === pokemonName ? { ...pokemon, notes } : pokemon,
          ),
        }));
      },

      updatePokemon: (pokemonName, status, name) => {
        set((state) => ({
          collection: state.collection.map((pokemon) =>
            pokemon.name === pokemonName
              ? { ...pokemon, status, name }
              : pokemon,
          ),
        }));
      },
    }),
    {
      name: "pokemon-storage",
    },
  ),
);

export default useCollectionStore;
