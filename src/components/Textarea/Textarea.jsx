import React from 'react';
import "./Textarea.scss";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Textarea = ({ field, onEdit, onDelete, editMode, setForm }) => {
  const handleInputChange = (event) => {
    setForm({
      label: field.label,
      value: event.target.value,
    });
  };

  return (
    <div className='textareaWrapper'>
      <span className='textareaHeading'>{field.label}</span>
      <textarea
        className='textarea'
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

export default Textarea;
