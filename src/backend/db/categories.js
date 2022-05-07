import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Healthcare",
  },
  {
    _id: uuid(),
    categoryName: "Training",
  },
  {
    _id: uuid(),
    categoryName: "Adoption",
  },
  {
    _id: uuid(),
    categoryName: "Make My Day",
  },
  {
    _id: uuid(),
    categoryName: "Films and Animation",
  },
];
