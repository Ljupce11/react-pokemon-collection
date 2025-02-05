import {
  PAGINATION_ITEMS_PER_PAGE,
  TOAST_SETTINGS,
} from "@/constants/constants";
import type { Pokemon, PokemonResponse } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "./use-toast";

export const usePokemonData = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [cachedPokemon, setCachedPokemon] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchPokemon = useCallback(async () => {
    setIsLoading(true);

    try {
      const offset = (currentPage - 1) * PAGINATION_ITEMS_PER_PAGE;
      const response = await fetch(
        `https://pok123eapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGINATION_ITEMS_PER_PAGE}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as PokemonResponse;
      setCachedPokemon(data.results);
      setPokemon(data.results);
      setTotalPages(Math.ceil(data.count / PAGINATION_ITEMS_PER_PAGE));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        ...TOAST_SETTINGS,
        variant: "destructive",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, toast]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  const handleSearch = useCallback(
    (value: string) => {
      if (value === "") {
        setPokemon(cachedPokemon);
      } else {
        setPokemon(
          cachedPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase()),
          ),
        );
      }
    },
    [cachedPokemon],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    },
    [totalPages],
  );

  return {
    pokemon,
    currentPage,
    totalPages,
    isLoading,
    handlePageChange,
    handleSearch,
  };
};
