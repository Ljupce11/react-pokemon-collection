import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCollectionStore from "@/store/useCollectionStore";

export const BulkActionButtons = () => {
  const { collection } = useCollectionStore((state) => state);

  return (
    <div className="flex">
      <Button
        variant={"ghost"}
        disabled={!collection.some((pokemon) => pokemon.selected)}
      >
        <Pencil />
        Edit
      </Button>
      <Button
        variant={"ghost"}
        disabled={!collection.some((pokemon) => pokemon.selected)}
      >
        <Trash2 />
        Remove
      </Button>
    </div>
  );
};
