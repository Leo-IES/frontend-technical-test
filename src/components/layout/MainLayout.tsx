import { NavBar } from "@Components/UI/NavBar";
import { Footer } from "@Components/UI/Footer";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import "../../index.css";

interface AuxProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: AuxProps) => {
  return (
    <Box className="relative min-h-screen">
      <Box className="pb-96 sm:pb-48 ">
        <NavBar />
        <Box className="main-Content">{children}</Box>
        <Box className="pb-60 sm:pb-0 " />
      </Box>
      <Footer />
    </Box>
  );
};
