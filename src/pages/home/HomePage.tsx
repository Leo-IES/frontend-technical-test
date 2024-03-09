import { Box } from "@mui/material";
import { SectionCard } from "../../components/home/SectionCard";

export const HomePage = () => {
  return (
    <Box className="flex flex-row">
      <Box className="flex flex-col mr-6">
        <SectionCard title="Series" route="series" />
      </Box>
      <Box className="flex flex-col mr-6">
        <SectionCard title="Movies" route="movies" />
      </Box>
    </Box>
  );
};
