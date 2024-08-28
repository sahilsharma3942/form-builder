import React from 'react';
import "./StarRating.scss";
import { Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StarRating = ({ field, onEdit, onDelete, editMode, setForm }) => {
  const handleRatingChange = (event, value) => {
    setForm({
      label: field.label,
      value,
    });
  };

  return (
    <div className="starRating">
      <p className="starQuestion">{field.label}</p>
      <Rating
        onChange={handleRatingChange}
      />
      <div className="fieldControls" style={{display:(editMode?"block":"none")}}>
        <EditIcon onClick={() => onEdit(field.id)} />
        <DeleteIcon onClick={() => onDelete(field.id)} />
      </div>
    </div>
  );
};

export default StarRating;
