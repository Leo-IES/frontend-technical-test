import { useEffect } from "react";
import { Title } from "@Models/title.model";
import { PagginationDrawer } from "@Components/UI/PagginationDrawer";
import { getAllSeriesInfo } from "@Services/SeriesService";
import { MainLayout } from "@Components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { assignTitles, setError, setLoading } from "@Features/titles/titleReducer";
import { LoadingComponent } from "@Components/UI/Loading";
import { ErrorComponent } from "@Components/UI/Error";

export const SeriesPage = () => {
  const loading = useSelector((state: any) => state.title.loading);
  const error = useSelector((state: any) => state.title.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getSeriesInfo();
  }, []);

  const getSeriesInfo = () => {
    dispatch(setLoading(true));
    getAllSeriesInfo()
      .then((data: Title[] | any) => {
        dispatch(setError(false));
        dispatch(setLoading(false));
        dispatch(assignTitles(data));
      })
      .catch((error: Error) => {
        dispatch(setError(true));
        console.error("ERROR", error);
      });
  };

  return (
    <MainLayout>
       {loading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <PagginationDrawer />
      )}
    </MainLayout>
  );
};
