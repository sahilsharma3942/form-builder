import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Categories.scss"

const Categories = ({ field, onEdit, onDelete, editMode, setForm }) => {
  const handleInputChange = (event, index) => {
    const updatedOptions = [...field.options];
    updatedOptions[index] = event.target.value;
    
    setForm({
      label: field.label,
      value: updatedOptions,
    });
  };

  return (
    <div className="categories">
      <p className="categoriesQuestion">{field.label}</p>
      <div className="categoriesContainer">
        {field.options.map((option, index) => {
          return (
            <div className="options" key={index}>
              <label htmlFor={`option${index + 1}`}>{option}</label>
              <input
                type="text"
                value={option}
                onChange={(event) => handleInputChange(event, index)}
              />
            </div>
          );
        })}
      </div>
      <div className="fieldControls" style={{ display: editMode ? "block" : "none" }}>
        <EditIcon onClick={() => onEdit(field.id)} />
        <DeleteIcon onClick={() => onDelete(field.id)} />
      </div>
    </div>
  );
};

export default Categories;
