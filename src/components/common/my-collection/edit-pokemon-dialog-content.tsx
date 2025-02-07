import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { EditPokemonFormData } from "@/types/types";

type Props = {
  formData: EditPokemonFormData;
  handleSetFormData: (formData: EditPokemonFormData) => void;
};

export const EditPokemonDialogContent = ({
  formData,
  handleSetFormData,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          placeholder="Enter pokemon name"
          onChange={(e) =>
            handleSetFormData({ ...formData, name: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pokemonStatus">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value) =>
            handleSetFormData({
              ...formData,
              status: value as typeof formData.status,
            })
          }
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="wantToTrain">Want to train</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="completedTraining">
                Completed training
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
