import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
const DialogComp = ({ title, open, handleClose, handleSave }) => {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSave,
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          name="formName"
          type="text"
          sx={{ width: 444 }}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit">Create</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComp;
