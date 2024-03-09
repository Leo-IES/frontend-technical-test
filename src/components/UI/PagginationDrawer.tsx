import { Title } from "@Models/title.model";
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { TitleCard } from "./TitleCard";
import { TitleModal } from "./TitleModal";
import { SearchByYearInput } from "./SearchByYearInput";
import { ItemsPerPageSelect } from "./ItemsPerPageSelect";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@Features/titles/titleModalReducer";

export const PagginationDrawer = () => {
  const data = useSelector((state: any) => state.title.entries);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  useEffect(() => {
    if (data.length % itemsPerPage != 0) {
      setTotalPages(Math.floor(data.length / itemsPerPage) + 1);
      return;
    }
    setTotalPages(data.length / itemsPerPage);
  }, [data.length != 0 && itemsPerPage]);

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };
  const handleItemsPerPageChange = ({ target }: any) => {
    const { value } = target;
    setItemsPerPage(value);
  };
  const handleSearchInputChanges = (event: any) => {
    console.log("event", Number(event));
    // currentData = currentData.filter(
    //   (title: Title) => title.releaseYear == Number(event)
    // );
  };
  const handleSearchInputClean = () => {
    console.log("event clean");
    // currentData = data.slice(startIndex, endIndex);
  };

  return (
    <>
      <Box className="flex justify-center">
        <SearchByYearInput
          search={handleSearchInputChanges}
          cleanSearch={handleSearchInputClean}
        />
      </Box>
      <Box className="flex justify-center sm:justify-end mb-4 mt-4">
        <ItemsPerPageSelect
          itemsPerPage={itemsPerPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
        />
      </Box>
      <Box className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-8">
        {currentData.map((title: Title) => (
          <Box className="flex justify-center" key={title.title}>
            <TitleCard
              title={title.title}
              background={title.images["Poster Art"].url}
              onclick={() => dispatch(openModal(title))}
            />
          </Box>
        ))}
      </Box>
      <Box className="flex justify-center mt-4 mb-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
      <TitleModal />
    </>
  );
};
