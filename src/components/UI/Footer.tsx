import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import twitterIcon from "@Assets/social/twitter-white.svg";
import facebookIcon from "@Assets/social/facebook-white.svg";
import instagramIcon from "@Assets/social/instagram-white.svg";
import appStoreIcon from "@Assets/store/app-store.svg";
import playStoreIcon from "@Assets/store/play-store.svg";
import windowsStoreIcon from "@Assets/store/windows-store.svg";

export const Footer = () => {
  return (
    <footer data-testid="footer-component">
      <Box
        sx={{
          padding: "2em 6em",
          backgroundColor: "#1e1e1e",
          color: "#aba9ab",
          width:'100%',
          position: 'absolute',
          bottom: 0,
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
