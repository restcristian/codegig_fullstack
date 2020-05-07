import { FETCH_GIGS } from "./types";

export const fetchGigs = () => ({
  type: FETCH_GIGS,
  payload: [
    {
      title: "hello",
      description: "hello world",
      budget: "2323",
      technologies: "123",
    },
  ],
});
