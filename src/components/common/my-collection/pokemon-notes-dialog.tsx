import { Notebook } from "lucide-react";
import { useState } from "react";

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
import { Textarea } from "@/components/ui/textarea";
import useCollectionStore from "@/store/useCollectionStore";
import type { MyCollectionDialogState, PokemonData } from "@/types/types";

type Props = {
  dialogState: MyCollectionDialogState;
  setDialogState: (
    type: MyCollectionDialogState["type"],
    pokemon?: PokemonData | null,
  ) => void;
};

const PokemonNotesDialog = ({ dialogState, setDialogState }: Props) => {
  const { pokemon } = dialogState;
  const [notes, setNotes] = useState(pokemon?.notes ?? "");
  const updatePokemonNotes = useCollectionStore(
    (state) => state.updatePokemonNotes,
  );

  const handleSaveNotes = () => {
    updatePokemonNotes(pokemon?.name ?? "", notes);
    setDialogState(null, pokemon);
  };

  return (
    <Dialog
      open={dialogState.type === "notes"}
      onOpenChange={(isOpen) =>
        setDialogState(isOpen ? "notes" : null, dialogState.pokemon)
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Notebook />
            Notes
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <Textarea
          rows={20}
          value={notes}
          placeholder="Add your notes here..."
          onChange={(e) => setNotes(e.target.value)}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="default" onClick={handleSaveNotes}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonNotesDialog;
