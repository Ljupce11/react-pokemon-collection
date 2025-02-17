import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useCollectionStore from "@/store/useCollectionStore";
import type { MyCollectionDialogProps } from "@/types/types";

const RemovePokemonDialog = ({
  dialogState,
  setDialogState,
}: MyCollectionDialogProps) => {
  const { type, pokemon } = dialogState;
  const removePokemon = useCollectionStore((state) => state.removePokemon);

  const handleRemovePokemon = () => {
    removePokemon(pokemon?.name ?? "");
    setDialogState(null, pokemon);
  };

  return (
    <Dialog
      open={type === "remove"}
      onOpenChange={(isOpen) =>
        setDialogState(isOpen ? "remove" : null, pokemon)
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trash2 />
            Remove from collection
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <p className="mt-2 mb-5">
          Are you sure you want to remove this pokemon from your collection?
        </p>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={handleRemovePokemon}
          >
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemovePokemonDialog;
