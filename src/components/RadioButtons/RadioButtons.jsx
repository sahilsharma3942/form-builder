import React from "react";
import "./RadioButtons.scss";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const RadioButtons = ({ field,onEdit,onDelete,editMode}) => {
  return (
    <div className="radioButtons">
      <p className="radioQuestion">{field.label}</p>
      <div className="radioContainer">
        {field.options.map((option) => {
          return (
            <div className="options">
              <input type="radio" id={option} name="options" value="1" />
              <label htmlFor="option1">{option}</label>
            </div>
          );
        })}
      </div>
      <div className="fieldControls" style={{display:(editMode?"block":"none")}}>
          <EditIcon onClick={()=>onEdit(field.id)}/>
          <DeleteIcon onClick={()=>onDelete(field.id)}/>
        </div>
    </div>
  );
};

export default RadioButtons;
