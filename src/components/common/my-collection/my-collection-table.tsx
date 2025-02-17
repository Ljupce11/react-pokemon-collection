import { FolderOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COLLECTION_STATUS } from "@/constants/constants";
import { getPokemonImageUrl } from "@/lib/utils";
import useCollectionStore from "@/store/useCollectionStore";
import type { PokemonData } from "@/types/types";
import { PokemonSprite } from "../pokemon-sprite";
import { BulkActionButtons } from "./bulk-action-buttons";
import { MyCollectionTableActions } from "./my-collection-table-actions";

type Props = {
  handleNotesDialog: (pokemon: PokemonData) => void;
  handleEditDialog: (pokemon: PokemonData) => void;
  handleRemoveDialog: (pokemon: PokemonData) => void;
};

export const MyCollectionTable = ({
  handleNotesDialog,
  handleEditDialog,
  handleRemoveDialog,
}: Props) => {
  const { collection, selectAllPokemonToggle, selectPokemonToggle } =
    useCollectionStore((state) => state);

  if (collection.length === 0) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-full text-muted-foreground">
        <FolderOpen size={32} strokeWidth={1.5} />
        <p className="text-muted-foreground">
          Your pokemon collection is empty
        </p>
      </div>
    );
  }
  return (
    <>
      <BulkActionButtons />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={collection.every((pokemon) => pokemon.selected)}
                  onCheckedChange={selectAllPokemonToggle}
                />
                <label htmlFor="select-all" className="hidden">
                  Select all
                </label>
              </div>
            </TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collection.map((pokemon) => (
            <TableRow key={pokemon.name}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={pokemon.name}
                    checked={pokemon.selected}
                    onCheckedChange={() => selectPokemonToggle(pokemon.name)}
                  />
                  <label htmlFor={pokemon.name} className="hidden">
                    Select {pokemon.name}
                  </label>
                </div>
              </TableCell>

              <TableCell>
                <PokemonSprite
                  className="w-10 h-10"
                  alt={pokemon.name}
                  src={getPokemonImageUrl(pokemon.id)}
                />
              </TableCell>

              <TableCell className="font-medium capitalize">
                {pokemon.name}
              </TableCell>

              <TableCell className="font-medium">
                <Badge variant={COLLECTION_STATUS[pokemon.status].color}>
                  {COLLECTION_STATUS[pokemon.status].label}
                </Badge>
              </TableCell>

              <TableCell className="font-medium text-center space-x-2">
                <MyCollectionTableActions
                  pokemon={pokemon}
                  handleNotesDialog={handleNotesDialog}
                  handleEditDialog={handleEditDialog}
                  handleRemoveDialog={handleRemoveDialog}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
