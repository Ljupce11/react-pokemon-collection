import type { ChartConfig } from "@/components/ui/chart";

export const TOAST_SETTINGS = {
  title: "Uh oh! Something went wrong.",
};

export const PAGINATION_ITEMS_PER_PAGE = 20;

export const COLLECTION_STATUS = {
  wantToTrain: {
    label: "Want to train",
    color: "secondary",
  },
  training: {
    label: "Training",
    color: "blue",
  },
  completedTraining: {
    label: "Completed training",
    color: "success",
  },
} as const;

export const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

export const chartConfig = {
  desktop: {
    label: "Catches",
    color: "black",
  },
} satisfies ChartConfig;

export const recentCatches = [
  {
    name: "Pikachu",
    experience: 100,
  },
  {
    name: "Bulbasaur",
    experience: 200,
  },
  {
    name: "Charmander",
    experience: 300,
  },
  {
    name: "Squirtle",
    experience: 400,
  },
  {
    name: "Caterpie",
    experience: 500,
  },
  {
    name: "Weedle",
    experience: 600,
  },
];
