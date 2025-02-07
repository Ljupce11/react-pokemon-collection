import { Suspense, lazy } from "react";

import { BulkActionButtons } from "@/components/common/my-collection/bulk-action-buttons";
import { MyCollectionTable } from "@/components/common/my-collection/my-collection-table";
import { SearchForm } from "@/components/common/search-form";
import { useCollectionDialogState } from "@/hooks/use-collection-dialog-state";

const PokemonNotesDialog = lazy(
  () => import("@/components/common/my-collection/pokemon-notes-dialog"),
);
const EditPokemonDialog = lazy(
  () => import("@/components/common/my-collection/edit-pokemon-dialog"),
);
const RemovePokemonDialog = lazy(
  () => import("@/components/common/my-collection/remove-pokemon-dialog"),
);

const DialogLoadingFallback = () => null;

export const MyCollection = () => {
  const { dialogState, handleDialog } = useCollectionDialogState();

  return (
    <>
      {dialogState.type && (
        <Suspense fallback={<DialogLoadingFallback />}>
          {dialogState.type === "notes" && (
            <PokemonNotesDialog
              dialogState={dialogState}
              setDialogState={handleDialog}
            />
          )}
          {dialogState.type === "edit" && (
            <EditPokemonDialog
              dialogState={dialogState}
              setDialogState={handleDialog}
            />
          )}
          {dialogState.type === "remove" && (
            <RemovePokemonDialog
              dialogState={dialogState}
              setDialogState={handleDialog}
            />
          )}
        </Suspense>
      )}
      <div className="max-w-screen-xl flex flex-col mx-auto gap-8 p-4">
        <h1 className="text-2xl font-semibold text-center">My Collection</h1>
        <SearchForm />

        <BulkActionButtons />

        <MyCollectionTable
          handleNotesDialog={(pokemon) => handleDialog("notes", pokemon)}
          handleEditDialog={(pokemon) => handleDialog("edit", pokemon)}
          handleRemoveDialog={(pokemon) => handleDialog("remove", pokemon)}
        />
      </div>
    </>
  );
};
