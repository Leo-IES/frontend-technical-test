import { Box } from "@mui/material";
import { SectionCard } from "@Components/home/SectionCard";
import { MainLayout } from "@Components/layout/MainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <Box data-testid='homepage-component' className="grid grid-cols-1 sm:flex sm:flex-row ">
        <Box className="flex flex-col m-4 sm:mb-0 sm:mr-6">
          <SectionCard title="Series" route="series" />
        </Box>
        <Box className="flex flex-col m-4 sm:mb-0 sm:mr-6">
          <SectionCard title="Movies" route="movies" />
        </Box>
      </Box>
    </MainLayout>
  );
};
