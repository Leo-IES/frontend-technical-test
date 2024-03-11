import { NavBar } from "@Components/UI/NavBar";
import { Footer } from "@Components/UI/Footer";
import { Box } from "@mui/material";
import "../../index.css";

export const MainLayout = ({ children }: any) => {
  return (
    <Box className="relative min-h-screen">
      <Box className="pb-96 sm:pb-48 ">
        <NavBar />
        <Box className="main-Content">{children}</Box>
      <Box className="pb-60 sm:pb-0 "/>
      </Box>
      <Footer />
    </Box>
  );
};
