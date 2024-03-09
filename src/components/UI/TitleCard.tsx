import { Box } from "@mui/material";

export const TitleCard = ({
  title = "",
  background = "",
  onclick,
}: {
  title?: string;
  background?: string;
  onclick: any;
}) => {
  return (
    <Box onClick={onclick}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid white",
          },
        }}
        className="flex justify-center items-center text-center text-white w-36 h-48"
      >
        {title.toUpperCase()}
      </Box>
      <Box>Program {title}</Box>
    </Box>
  );
};
