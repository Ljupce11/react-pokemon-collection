import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export const BrowsePokemonSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => {
        const key = `skeleton-${index + 1}`;
        return (
          <Card key={key}>
            <CardHeader>
              <Skeleton className="h-24 w-full rounded-md" />
            </CardHeader>
            <Separator />
            <CardContent>
              <Skeleton className="h-6 w-24 rounded-md" />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
