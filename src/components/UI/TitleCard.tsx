import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import bgPlaceHolder from "@Assets/placeholder.png";

export const TitleCard = ({
  title = "",
  background = "",
  onclick,
}: {
  title?: string;
  background?: string;
  onclick: any;
}) => {
  const [backgroundURL, setbackgroundURL] = useState({
    error: false,
    url: background,
  });
  const [loading, setLoading] = useState(true);
  const img = new Image();
  img.src = background;

  useEffect(() => {
    setbackgroundURL({
      error: false,
      url: background,
    });
  }, [background]);

  img.onload = function () {
    setbackgroundURL({
      error: false,
      url: background,
    });
    setLoading(false);
  };

  img.onerror = function () {
    setbackgroundURL({
      error: true,
      url: bgPlaceHolder,
    });
    setLoading(false);
  };
  const { url, error } = backgroundURL;

  return (
    <>
      {loading ? (
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid white",
            },
          }}
          className="flex justify-center items-center text-center text-white w-36 h-48"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box onClick={onclick} className='max-w-36'>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
              },
            }}
            className="flex justify-center items-center text-center text-white w-36 h-48"
          >
            {error ? title.toUpperCase() : null}
          </Box>
          <Box>
            <Typography variant="body1" component="span">
              Program {title}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
