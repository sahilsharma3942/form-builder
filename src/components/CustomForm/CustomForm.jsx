import React, { useState } from "react";
import "./CustomForm.scss";
import Textarea from "../Textarea/Textarea";
import NumericRating from "../NumericRating/NumericRating";
import StarRating from "../StarRating/StarRating";
import SmileyRating from "../SmileyRating/SmileyRating";
import SingleLineInput from "../SingleLineInput/SingleLineInput";
import RadioButtons from "../RadioButtons/RadioButtons";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const CustomForm = ({ id, name, fields, onEdit, onDelete, editMode , handleCloseModal}) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (fieldId, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data
  
    try {
      const submissionData = {
        formId: id, // Ensure id is defined
        formData: formData,
        timestamp: new Date(), // Add any additional necessary fields
      };
  
      console.log("Submission Data:", submissionData);
  
      // Submit the data
      await addDoc(collection(db, "submissions"), submissionData);
      console.log("Form submitted successfully");
      handleCloseModal();
      // Set localStorage flag to prevent reappearing
      localStorage.setItem(`form_${id}_submitted`, 'true');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  


  const renderField = (field, index) => {
    switch (field.type) {
      case "Textarea":
        return (
          <Textarea
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}
          />
        );
      case "Numeric Rating":
        return (
          <NumericRating
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}
          />
        );
      case "Star Rating":
        return (
          <StarRating
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}
          />
        );
      case "Smiley Rating":
        return (
          <SmileyRating
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}

          />
        );
      case "Single Line Input":
        return (
          <SingleLineInput
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}

          />
        );
      case "Radio Buttons":
        return (
          <RadioButtons
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}
            
          />
        );
      case "Categories":
        return (
          <Categories
            key={index}
            field={field}
            onEdit={onEdit}
            onDelete={onDelete}
            editMode={editMode}
            setForm={(value) => updateFormData(field.id, value)}

          />
        );
      default:
        return null; // Return null if the field type doesn't match any known types
    }
  };

  return (
    <form className="customForm" onSubmit={handleSubmit}>
      <div className="customFormHeader">
        <Link to={"/admin"}>
          <ArrowBackIosIcon className="backBtn" />
        </Link>
        <h2 className="formHeading">{name}</h2>
      </div>
      <div className="customFormBody">
        {fields.length === 0 ? (
          <p>ADD Fields</p>
        ) : (
          fields.map((field, index) => renderField(field, index))
        )}
      </div>
      <input type="submit" style={{width:"100px",margin:"auto",display:(editMode?"none":"block")}}></input>
    </form>
  );
};

export default CustomForm;
