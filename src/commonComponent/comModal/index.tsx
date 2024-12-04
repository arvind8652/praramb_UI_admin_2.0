import { Box, Modal } from "@mui/material";
import { FC, ReactNode } from "react";
import style from "./index.module.css";
import CustomDivider from "../customDivider";
import CustomText from "../customText";

type ComModalProps = {
  title?: string;
  data: ReactNode;
  showTitle?: boolean;
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
};

const ComModal: FC<ComModalProps> = (props) => {
  const { title, data, showTitle = true, openModal, setOpenModal } = props;
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.modalBox}>
          {showTitle && (
            <>
              <CustomText
                data={title || "TITLE"}
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "black", px: 2 }}
              />
              <CustomDivider sx={{ bgcolor: "#c7bfbf", height: "0.1px" }} />
            </>
          )}
          <CustomText
            data={data || "displaying data"}
            id="modal-modal-description"
            sx={{ mt: showTitle ? 2 : 0 }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ComModal;
