import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  handleSearch?: (value: string) => void;
};

export function SearchForm({ handleSearch }: Props) {
  return (
    <form className="w-1/2 mx-auto">
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          className="pl-8"
          placeholder="Search pokemon..."
          onChange={(e) => handleSearch?.(e.target.value)}
        />
        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </div>
    </form>
  );
}
