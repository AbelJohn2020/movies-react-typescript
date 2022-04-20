import { uri } from "../../app/condig";

export type error = {
  type: string;
  status: string;
};

export const typeError = {
  type: "error",
  status: "404",
};

export const getMovies = async () => {
  try {
    const response = await uri.get("");
    const data = await response.data.results;
    return data;
  } catch (error) {
    return typeError;
  }
};
