import { Box, IconButton, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import twitterIcon from "@Assets/social/twitter-white.svg";
import facebookIcon from "@Assets/social/facebook-white.svg";
import instagramIcon from "@Assets/social/instagram-white.svg";
import appStoreIcon from "@Assets/store/app-store.svg";
import playStoreIcon from "@Assets/store/play-store.svg";
import windowsStoreIcon from "@Assets/store/windows-store.svg";

export const Footer = () => {
  const location = useLocation();
  return (
    <footer
    data-testid='footer-component'
      className={
        location.pathname == "/" ? "absolute bottom-0 w-full" : "staticw-full"
      }
    >
      <Box
        sx={{
          paddingLeft: "6em !important",
          paddingRight: "6em !important",
          backgroundColor: "#1e1e1e",
          color: "#aba9ab",
          paddingTop: "2em !important",
          paddingBottom: "2em !important",
        }}
      >
        <Box>
          <Typography variant="body1" component="span">
            <Link to={"/"}>Home</Link> | Terms and Conditions | Privacy Policy |
            Collection Statement | Help | Manage Account
          </Typography>
        </Box>

        <Box className="mt-2">
          <Typography variant="body2" component="div">
            Copyright &copy; DEMO Streaming. All Rights Reserved.
          </Typography>
        </Box>
        <Box className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Box className="grid sm:flex grid-cols-1 sm:grid-cols-3 gap-4 justify-center sm:justify-start">
            <IconButton>
              <img src={facebookIcon} className="w-8" />
            </IconButton>
            <IconButton>
              <img src={twitterIcon} className="w-8" />
            </IconButton>
            <IconButton>
              <img src={instagramIcon} className="w-8" />
            </IconButton>
          </Box>
          <Box className="grid grid-cols-1 xl:flex sm:grid-cols-1 md:grid-cols-3 gap-4 justify-center  md:justify-end">
            <IconButton>
              <img src={appStoreIcon} className="min-w-28" />
            </IconButton>
            <IconButton>
              <img src={playStoreIcon} className="min-w-28" />
            </IconButton>
            <IconButton>
              <img src={windowsStoreIcon} className="min-w-28" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
