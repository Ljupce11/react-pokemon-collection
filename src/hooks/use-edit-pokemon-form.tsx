import { useState } from "react";

import useCollectionStore from "@/store/useCollectionStore";
import type {
  EditPokemonFormData,
  MyCollectionDialogState,
  PokemonData,
} from "@/types/types";

type EditPokemonFormProps = {
  pokemon: PokemonData;
  setDialogState: (
    type: MyCollectionDialogState["type"],
    pokemon: PokemonData | null,
  ) => void;
};

export const useEditPokemonForm = ({
  pokemon,
  setDialogState,
}: EditPokemonFormProps) => {
  const updatePokemon = useCollectionStore((state) => state.updatePokemon);
  const [formData, setFormData] = useState<EditPokemonFormData>({
    name: pokemon.name,
    status: pokemon.status,
  });

  const handleSaveChanges = () => {
    updatePokemon(pokemon.name, formData.status, formData.name);
    setDialogState(null, null);
  };

  const handleSetFormData = (formData: { name: string; status: string }) => {
    setFormData({
      name: formData.name,
      status: formData.status as PokemonData["status"],
    });
  };

  return { formData, handleSaveChanges, handleSetFormData };
};
