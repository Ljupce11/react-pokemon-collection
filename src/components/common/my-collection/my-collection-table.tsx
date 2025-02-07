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
import useCollectionStore from "@/store/useCollectionStore";
import type { PokemonData } from "@/types/types";
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

  return (
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
              <img
                width={50}
                height={50}
                alt={pokemon.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
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
  );
};
