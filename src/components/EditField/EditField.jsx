import React, { useRef } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';

const EditField = ({ editingField, setEditingField, handleEditSave }) => {
  const labelRef = useRef(editingField.label);
  const requiredRef = useRef(editingField.required);

  // Refs for Radio Buttons options
  const option1Ref = useRef(editingField.options ? editingField.options[0] : '');
  const option2Ref = useRef(editingField.options ? editingField.options[1] : '');
  const option3Ref = useRef(editingField.options ? editingField.options[2] : '');

  const errorMessageRef = useRef(editingField.errorMessage);

  const handleSave = () => {
    const updatedField = {
      id: editingField.id,
      label: labelRef.current.value,
      required: requiredRef.current.checked,
    };

    if (editingField.type === 'Radio Buttons') {
      updatedField.options = [
        option1Ref.current.value,
        option2Ref.current.value,
        option3Ref.current.value,
      ];
    } else {
      updatedField.errorMessage = errorMessageRef.current.value;
    }

    handleEditSave(updatedField);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <Typography variant="h6">Edit Field</Typography>
      </Box>
      <Box mt={2}>
        <TextField
          inputRef={labelRef}
          label="Label"
          fullWidth
          defaultValue={editingField.label}
        />
      </Box>
      <Box mt={2}>
        <FormControlLabel
          control={
            <Checkbox
              inputRef={requiredRef}
              defaultChecked={editingField.required}
              color="primary"
            />
          }
          label="Required"
        />
      </Box>

      {editingField.type === 'Radio Buttons' ? (
        <>
          <Box mt={2}>
            <Typography variant="subtitle1">Options</Typography>
            <TextField
              inputRef={option1Ref}
              label="Option 1"
              fullWidth
              defaultValue={editingField.options ? editingField.options[0] : ''}
            />
          </Box>
          <Box mt={2}>
            <TextField
              inputRef={option2Ref}
              label="Option 2"
              fullWidth
              defaultValue={editingField.options ? editingField.options[1] : ''}
            />
          </Box>
          <Box mt={2}>
            <TextField
              inputRef={option3Ref}
              label="Option 3"
              fullWidth
              defaultValue={editingField.options ? editingField.options[2] : ''}
            />
          </Box>
        </>
      ) : (
        <Box mt={2}>
          <TextField
            inputRef={errorMessageRef}
            label="Error Message"
            fullWidth
            defaultValue={editingField.errorMessage}
          />
        </Box>
      )}

      <Box mt={3} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setEditingField(null)}
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default EditField;
