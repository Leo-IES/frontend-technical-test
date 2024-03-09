import { useEffect, useState } from "react";
import { Title } from "@Models/title.model";
import { PagginationDrawer } from "@Components/UI/PagginationDrawer";
import { getAllSeriesInfo } from "@Services/SeriesService";

export const SeriesPage = () => {
  const [data, setData] = useState<Title[]>([]);

  useEffect(() => {
    getSeriesInfo();
  }, []);

  const getSeriesInfo = () => {
    getAllSeriesInfo()
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
