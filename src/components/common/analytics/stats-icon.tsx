import { Archive, Dumbbell, Sparkles, Swords } from "lucide-react";

import type { Stats } from "@/types/types";

export const StatsIcon = ({ icon }: { icon: Stats["icon"] }) => {
  switch (icon) {
    case "archive":
      return <Archive className="h-4 w-4 text-muted-foreground" />;
    case "XP":
      return <Sparkles className="h-4 w-4 text-muted-foreground" />;
    case "dumbbell":
      return <Dumbbell className="h-4 w-4 text-muted-foreground" />;
    case "swords":
      return <Swords className="h-4 w-4 text-muted-foreground" />;
  }
};
