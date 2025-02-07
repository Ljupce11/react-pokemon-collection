import { Notebook, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import type { PokemonData } from "@/types/types";

type Props = {
  pokemon: PokemonData;
  handleNotesDialog: (pokemon: PokemonData) => void;
  handleEditDialog: (pokemon: PokemonData) => void;
  handleRemoveDialog: (pokemon: PokemonData) => void;
};

export const MyCollectionTableActions = ({
  pokemon,
  handleNotesDialog,
  handleEditDialog,
  handleRemoveDialog,
}: Props) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="px-2"
              variant="outline"
              onClick={() => handleNotesDialog(pokemon)}
            >
              <Notebook />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notes</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => handleEditDialog(pokemon)}
              className="px-2"
              variant="outline"
            >
              <Pencil />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="px-2"
              variant="outline"
              onClick={() => handleRemoveDialog(pokemon)}
            >
              <Trash2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Remove from collection</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
