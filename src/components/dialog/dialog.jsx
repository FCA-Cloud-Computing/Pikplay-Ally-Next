import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function DialogRedemption({
  title,
  description,
  label,
  isPending,
  ref,
  credits,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (isSubmit) => {
    setOpen(false);
    if (isSubmit === true) {
      ref.current.requestSubmit();
    }
  };

  return (
    <>
      <button
        disabled={isPending ? true : false}
        type="button"
        onClick={handleOpen}
        className={`border border-white/50 w-full px-4 py-2 rounded-md hover:bg-white/50 transition duration-300 ${
          credits ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
