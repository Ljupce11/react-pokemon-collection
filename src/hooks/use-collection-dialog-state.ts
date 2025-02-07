import { useState } from "react";

import type { MyCollectionDialogState, PokemonData } from "@/types/types";
import { useToast } from "./use-toast";

export const useCollectionDialogState = () => {
  const { toast } = useToast();
  const [dialogState, setDialogState] = useState<MyCollectionDialogState>({
    type: null,
    pokemon: null,
  });

  const handleDialog = (
    type: MyCollectionDialogState["type"],
    pokemon?: PokemonData | null,
  ) => {
    if (type && !pokemon) {
      toast({
        variant: "destructive",
        title: "No pokemon selected",
        description: "Please select a pokemon to edit",
      });
      return;
    }
    setDialogState({
      type,
      pokemon: pokemon ?? null,
    });
  };

  return { dialogState, handleDialog };
};
