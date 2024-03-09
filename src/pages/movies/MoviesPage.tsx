import { useEffect } from "react";
import { Title } from "@Models/title.model";
import { PagginationDrawer } from "@Components/UI/PagginationDrawer";
import { getAllMoviesInfo } from "@Services/MoviesService";
import { MainLayout } from "@Components/layout/MainLayout";
import { useDispatch } from "react-redux";
import { assignTitles } from "@Features/titles/titleReducer";

export const MoviesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesInfo();
  }, []);

  const getMoviesInfo = () => {
    getAllMoviesInfo()
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
