import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          paddingLeft: "6em !important",
          paddingRight: "6em !important",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* <Link to={"/"}>     */}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              DEMO Streaming
            </Typography>
          {/* </Link> */}
        </Box>
        <Button
          color="inherit"
          sx={{
            textTransform: "none",
          }}
        >
          Log in
        </Button>
        <Button
          sx={{
            backgroundColor: "#3c3d3b",
            color: "white",
            textTransform: "none",
            marginLeft: 2,
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#3c3d3b",
            },
          }}
        >
          Start your free trial
        </Button>
      </Toolbar>
      <Box
        sx={{
          backgroundColor: "#414141",
          height: "2.6em",
          paddingLeft: "6em",
          paddingRight: "6em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" component="div">
            Popular Titles
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
};
