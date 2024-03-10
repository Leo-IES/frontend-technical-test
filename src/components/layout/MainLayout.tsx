import { NavBar } from "@Components/UI/NavBar";
import { Footer } from "@Components/UI/Footer";
import { Box } from "@mui/material";
import "../../index.css";

export const MainLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <Box className="main-Content">{children}</Box>
      <Footer />
    </>
  );
};
