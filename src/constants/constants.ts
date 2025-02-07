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
