import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const PokemonDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-4">
        <Skeleton className="w-24 h-24" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="w-24 h-5" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-12 h-4" />
          </div>
        </div>
        <Skeleton className="w-24 h-24" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex flex-col gap-2">
            <p className="font-semibold">Base Experience</p>
            <Skeleton className="w-10 h-4" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <p className="font-semibold">Height</p>
            <Skeleton className="w-10 h-4" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <p className="font-semibold">Weight</p>
            <Skeleton className="w-10 h-4" />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col gap-3">
          <Skeleton className="w-6 h-4" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-6 h-4" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-6 h-4" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-6 h-4" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-6 h-4" />
          <Skeleton className="w-full h-3" />
        </div>
      </div>
    </div>
  );
};
