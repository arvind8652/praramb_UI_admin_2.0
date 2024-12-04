import { FC, MouseEvent, ReactNode, useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

type CustomPopoverProps = {
  name: ReactNode | string;
  data: ReactNode;
};

const CustomPopover: FC<CustomPopoverProps> = (props) => {
  const { name = "poper", data } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {data}
      </Popover>
    </div>
  );
};

export default CustomPopover;
