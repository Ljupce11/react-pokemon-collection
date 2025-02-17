import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export const BrowsePokemonSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => {
        const key = `skeleton-${index + 1}`;
        return (
          <Card key={key}>
            <CardHeader>
              <Skeleton className="h-24 w-24 mx-auto rounded-md" />
            </CardHeader>
            <Separator />
            <CardContent className="flex justify-between items-center">
              <Skeleton className="h-6 w-24 rounded-md" />
              <div className="border rounded-lg p-2">
                <Skeleton className="h-5 w-32 rounded-md" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
