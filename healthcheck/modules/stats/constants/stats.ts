import { format } from "date-fns";

import { categories } from "../../survey/constants/categories";

export const stats = {
  head: [
    "",
    format(new Date(2022, 1, 20), "MM/dd"),
    format(new Date(2022, 2, 6), "MM/dd"),
    format(new Date(2022, 2, 20), "MM/dd"),
    format(new Date(2022, 3, 3), "MM/dd"),
    format(new Date(2022, 3, 17), "MM/dd"),
  ],
  body: categories.map((category) => [
    category.name,
    (Math.random() * 3).toFixed(2),
    (Math.random() * 3).toFixed(2),
    (Math.random() * 3).toFixed(2),
    (Math.random() * 3).toFixed(2),
    (Math.random() * 3).toFixed(2),
  ]),
};
