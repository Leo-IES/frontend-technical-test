import { useEffect, useState } from "react";
import { Title } from "@Models/title.model";
import { PagginationDrawer } from "@Components/UI/PagginationDrawer";
import { getAllMoviesInfo } from "@Services/MoviesService";

export const MoviesPage = () => {
  const [data, setData] = useState<Title[]>([]);

  useEffect(() => {
    getMoviesInfo();
  }, []);

  const getMoviesInfo = () => {
    getAllMoviesInfo()
      .then((data: Title[] | any) => {
        console.log("data", data);
        setData(data);
      })
      .catch((error: Error) => {
        console.error("ERROR", error);
      });
  };

  return (
      <PagginationDrawer data={data} />
  );
};
