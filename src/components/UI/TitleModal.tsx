import { Box, Modal, Typography, Zoom } from "@mui/material";
import background from "@Assets/placeholder.png";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export const TitleModal = ({ open, handleClose }: ModalProps) => {
  return (
    <Modal open={open} onClose={handleClose} className="border-none">
      <Zoom
        in={open}
        easing={{
          enter: "cubic-bezier(0, 1.3 , .9, 1)",
          exit: "cubic-bezier(.22,.2,.61,1.02)",
        }}
        timeout={{ enter: 350, exit: 150 }}
      >
        <Box className="flex justify-center items-center fixed inset-0">
          <Box className="xs:rounded-lg w-1/2 xs:w-5/6 lg:w-4/6 xl:w-3/6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white py-5 px-8 shadow-lg">
            <Box className="flex items-center justify-between ">
              <Typography variant="h6" component="span" className="uppercase">
                Titulo
                {/* {modalTitle} */}
              </Typography>
            </Box>
            <Box className="w-full grid grid-cols-2 mt-4">
              <Box className="flex justify-center">
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="flex justify-center items-center text-center text-white w-36 h-48 rounded"
                />
              </Box>
              <Box>
                <Typography variant="body2" component="div">
                  Description:
                </Typography>
                <Typography variant="body2" component="div">
                  Release Year:
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Zoom>
    </Modal>
  );
};
