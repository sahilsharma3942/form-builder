import React, { useState } from "react";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import Timer10Icon from "@mui/icons-material/Timer10";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Crop169Icon from "@mui/icons-material/Crop169";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CategoryIcon from "@mui/icons-material/Category";
import { v4 as uuidv4 } from "uuid";

const AddField = ({ setFields, setLogic, fields,logic }) => {

  // Change handler for the logic inputs
  const handleLogicChange = (logicType, value) => {
    setLogic((prevLogic) => ({
      ...prevLogic,
      [logicType]: value,
    }));
  };

  const addField = (fieldType) => {
    let newField;
    if (fieldType === "Textarea") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "Would you like to add a comment?*",
        required: false,
        errorMessage: "default error message",
      };
    } else if (fieldType === "Numeric Rating") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label:
          "How likely is it that you will recommend us to your family and friends?",
        required: false,
        errorMessage: "default error message",
      };
    } else if (fieldType === "Star Rating") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "Give a star rating for the website.",
        required: false,
        errorMessage: "default error message",
      };
    } else if (fieldType === "Smiley Rating") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "What is your opinion of this page?",
        required: false,
        errorMessage: "default error message",
      };
    } else if (fieldType === "Single Line Input") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "Do you have any suggestions to improve our website?",
        required: false,
        errorMessage: "default error message",
      };
    } else if (fieldType === "Radio Buttons") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "Multiple choice - 1 answer",
        required: false,
        options: ["option1", "option2", "option3"],
      };
    } else if (fieldType === "Categories") {
      newField = {
        id: uuidv4(),
        type: fieldType,
        label: "Pick a subject and provide your feedback:",
        required: false,
        options: ["option1", "option2", "option3"],
      };
    }
    setFields([...fields, newField]);
  };

  return (
    <div className="addFieldContainer">
      <h3>Add Field</h3>
      <ul className="fieldList">
        <li onClick={() => addField("Textarea")}>
          <span>
            <FormatColorTextIcon className="icon" /> Textarea
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Numeric Rating")}>
          <span>
            <Timer10Icon className="icon" /> Numeric Rating
          </span>
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Star Rating")}>
          <span>
            <StarOutlineIcon className="icon" /> Star Rating
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Smiley Rating")}>
          <span>
            <SentimentVerySatisfiedIcon className="icon" /> Smiley Rating
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Single Line Input")}>
          <span>
            <Crop169Icon className="icon" /> Single Line Input
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Radio Buttons")}>
          <span>
            <RadioButtonCheckedIcon className="icon" /> Radio Buttons
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
        <li onClick={() => addField("Categories")}>
          <span>
            <CategoryIcon className="icon" /> Categories
          </span>{" "}
          <span className="addIcon">➕</span>
        </li>
      </ul>
      <div className="addLogicContainer">
        <h3>Add Logic</h3>
        <div className="logicOptions">
          <div className="logicItem">
            <label>
              Show based on URL conditions
            </label>
            <input
              className="logicInput"
              type="text"
              value={logic.url}
              placeholder="http://"
              onChange={(e) => handleLogicChange('url', e.target.value)}
            />
          </div>
          <div className="logicItem">
            <label>
              Show on a specific date 
            </label>
            <input
              className="logicInput"
              type="date"
              value={logic.date}
              onChange={(e) => handleLogicChange('date', e.target.value)}
            />
          </div>
          <div className="logicItem">
            <label>
              Show on a specific time
            </label>
            <input
              className="logicInput"
              type="time"
              value={logic.time}
              onChange={(e) => handleLogicChange('time', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddField;
