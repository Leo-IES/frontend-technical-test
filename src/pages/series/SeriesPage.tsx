import { useEffect } from "react";
import { Title } from "@Models/title.model";
import { PagginationDrawer } from "@Components/UI/PagginationDrawer";
import { getAllSeriesInfo } from "@Services/SeriesService";
import { MainLayout } from "@Components/layout/MainLayout";
import { useDispatch } from "react-redux";
import { assignTitles } from "@Features/titles/titleReducer";

export const SeriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSeriesInfo();
  }, []);

  const getSeriesInfo = () => {
    getAllSeriesInfo()
      .then((data: Title[] | any) => {
        dispatch(assignTitles(data));
      })
      .catch((error: Error) => {
        console.error("ERROR", error);
      });
  };

  return (
    <MainLayout>
      <PagginationDrawer />
    </MainLayout>
  );
};
