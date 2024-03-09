import { Box, IconButton, Typography } from "@mui/material";

import twitterIcon from "../../assets/social/twitter-white.svg";
import facebookIcon from "../../assets/social/facebook-white.svg";
import instagramIcon from "../../assets/social/instagram-white.svg";
import appStoreIcon from "../../assets/store/app-store.svg";
import playStoreIcon from "../../assets/store/play-store.svg";
import windowsStoreIcon from "../../assets/store/windows-store.svg";


export const Footer = () => {
  return (
    <footer>
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
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </Typography>
        </Box>

        <Box className="mt-2">
          <Typography variant="body2" component="div">
            Copyright &copy; DEMO Streaming. All Rights Reserved.
          </Typography>
        </Box>
        <Box className="mt-8 flex">
          <Box className="flex-1">
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
          <Box className="flex flex-1 justify-end">
            <IconButton>
              <img src={appStoreIcon} className="w-28" />
            </IconButton>
            <IconButton>
              <img src={playStoreIcon} className="w-28" />
            </IconButton>
            <IconButton>
              <img src={windowsStoreIcon} className="w-28" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
