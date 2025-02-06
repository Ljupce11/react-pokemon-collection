import { useEffect, useState } from "react";

import { TOAST_SETTINGS } from "@/constants/constants";
import type { PokemonData } from "@/types/types";
import { useToast } from "./use-toast";

export const usePokemonDetails = (pokemonName: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      const fetchPokemon = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
          );
          if (!response.ok) {
            throw new Error("Failed to fetch pokemon data");
          }
          const data = await response.json();
          setPokemonData(data);
          console.log(data);
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "An unknown error occurred";
          toast({
            ...TOAST_SETTINGS,
            variant: "destructive",
            description: errorMessage,
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchPokemon();
    }
  }, [isOpen, pokemonName, toast]);

  const handleOpen = (value: boolean) => {
    setIsOpen(value);
  };

  return { isOpen, handleOpen, pokemonData, isLoading };
};
