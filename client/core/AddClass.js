import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddClass(props) {
  function addCourse() {
    props.handleAdd({
      schedule: "TT 1:30-2:20",
      tests: [],
      title: "Example Class 2",
      _id: "exampleID",
    })
    props.handleClose()
  }
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the required basic information for a new course.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="schedule"
            label="Schedule"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCourse} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
