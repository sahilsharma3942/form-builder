import React from 'react';
import "./singleLineInput.scss";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleLineInput = ({ field, onEdit, onDelete, editMode, setForm }) => {
  const handleInputChange = (event) => {
    setForm({
      label: field.label,
      value: event.target.value,
    });
  };

  return (
    <div className="singleLineWrapper">
      <span className='singleLineHeading'>{field.label}</span>
      <input
        type="text"
        className="singleLine"
        required={field.required}
        onChange={handleInputChange}
      />
      <div className="fieldControls" style={{display:(editMode?"block":"none")}}>
        <EditIcon onClick={() => onEdit(field.id)} />
        <DeleteIcon onClick={() => onDelete(field.id)} />
      </div>
    </div>
  );
};

export default SingleLineInput;
