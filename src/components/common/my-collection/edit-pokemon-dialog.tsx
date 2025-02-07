import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { useEditPokemonForm } from "@/hooks/use-edit-pokemon-form";
import type { MyCollectionDialogState, PokemonData } from "@/types/types";
import { EditPokemonDialogContent } from "./edit-pokemon-dialog-content";

type Props = {
  dialogState: MyCollectionDialogState;
  setDialogState: (
    type: MyCollectionDialogState["type"],
    pokemon?: PokemonData | null,
  ) => void;
};

const EditPokemonDialog = ({ dialogState, setDialogState }: Props) => {
  if (!dialogState.pokemon) return null;
  const { pokemon } = dialogState;
  const { formData, handleSaveChanges, handleSetFormData } = useEditPokemonForm(
    {
      pokemon,
      setDialogState,
    },
  );

  return (
    <Dialog
      open={dialogState.type === "edit"}
      onOpenChange={(isOpen) =>
        setDialogState(isOpen ? "edit" : null, dialogState.pokemon)
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pencil />
            Edit pokemon
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <EditPokemonDialogContent
          formData={formData}
          handleSetFormData={handleSetFormData}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="default" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPokemonDialog;
