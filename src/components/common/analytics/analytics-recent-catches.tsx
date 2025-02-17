import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { recentCatches } from "@/constants/constants";
import { getPokemonImageUrl } from "@/lib/utils";

export const AnalyticsRecentCatches = () => {
  return (
    <div className="space-y-8">
      {recentCatches.map((pokemon, index) => (
        <div key={pokemon.name} className="flex items-center">
          <Avatar className="h-9 w-9 border">
            <AvatarImage
              src={getPokemonImageUrl(index + 1)}
              alt={pokemon.name}
            />
            <AvatarFallback>{pokemon.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{pokemon.name}</p>
          </div>
          <div className="ml-auto font-medium">{pokemon.experience}</div>
        </div>
      ))}
    </div>
  );
};
