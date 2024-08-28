import React, { useState } from 'react';
import './NumericRating.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const NumericRating = ({ field, onEdit, onDelete, editMode, setForm }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setForm({
      label: field.label,
      value: rating,
    });
  };

  return (
    <div className="numericRating">
      <p className="question">{field.label}</p>
      <div className="ratingContainer">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index + 1}
            className={`ratingItem ${selectedRating === index + 1 ? 'selected' : ''}`}
            onClick={() => handleRatingClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="fieldControls" style={{display:(editMode?"block":"none")}}>
        <EditIcon onClick={() => onEdit(field.id)} />
        <DeleteIcon onClick={() => onDelete(field.id)} />
      </div>
    </div>
  );
};

export default NumericRating;
