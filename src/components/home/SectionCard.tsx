import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../../assets/placeholder.png";

export const SectionCard = ({
  title = "",
  route = "",
}: {
  title?: string;
  route?: string;
}) => {
  return (
    <Box className="flex justify-center">
      <Link to={`./${route}`}>
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-center items-center text-center text-white w-36 h-48"
        >
          {title.toUpperCase()}
        </Box>
        <Box>Popular {title}</Box>
      </Link>
    </Box>
  );
};
