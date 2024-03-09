import { Title } from "@Models/title.model";
import { DataResponse } from "@Models/data.model";
const dataUrl = "/data/sample.json";

export const getAllMoviesInfo = async (): Promise<Title[] | Error> => {
  return await fetch(dataUrl)
    .then((data) => data.json())
    .then((resp: DataResponse) => {
      return resp.entries
        .filter(
          (title: Title) =>
            title.programType == "movie" && title.releaseYear >= 2010
        )
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
    })
    .catch((error: Error) => error);
};
