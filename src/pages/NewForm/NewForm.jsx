import React, { useState } from "react";
import "./NewForm.scss";
import Header from "../../components/Header/Header";
import CustomForm from "../../components/CustomForm/CustomForm.jsx";
import { useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
import EditField from "../../components/EditField/EditField.jsx";
import Button from "@mui/material/Button";
import AddField from "../../components/AddField/AddField.jsx";
import useForm from "../../hooks/useForm.js";

const NewForm = () => {
  const { name, id } = useParams();
  const { fields, setFields , isPublished, setIsPublished , logic, setLogic} = useForm(id);
  const [editingField, setEditingField] = useState(null);

  
  
  const handleEdit = (fieldId) => {
    const fieldToEdit = fields.find((field) => field.id === fieldId);
    setEditingField(fieldToEdit);
  };

  const handleDelete = (fieldId) => {
    console.log(fieldId);
    setFields(fields.filter((field) => field.id !== fieldId));
  };

  const handleSave = async (isPublish = false) => {
    try {
      const form = {
        id,
        name,
        fields,
        logic,
        isPublished
      };
      if (isPublish === true) {
        const isLogicFilled = logic?.url && logic?.date && logic?.time;
        if (!isLogicFilled) {
          alert("Please fill logic conditions before publishing.");
          return;
        }
        form.isPublished = true;
        setIsPublished(true);
      }
      const docRef = doc(db, "forms", id);
      console.log(form)
      await setDoc(docRef, form);
      console.log("successfully added/updated/published");
    } catch (error) {
      console.error("Error saving form: ", error);
    }
  };

  const handleEditSave = (updatedField) => {
    setFields(
      fields.map((field) =>
        field.id === updatedField.id ? { ...field, ...updatedField } : field
      )
    );
    setEditingField(null); // Close the edit panel after saving
  };

  return (
    <div className="formWrapper">
      <Header />
      <div className="formBuilder">
        <div className="formBuilderLeft">
          <CustomForm
            id={id}
            name={name}
            fields={fields}
            onDelete={handleDelete}
            onEdit={handleEdit}
            editMode={true}
          />
        </div>
        <div className="formBuilderRight">
          {editingField ? (
            <EditField
              editingField={editingField}
              setEditingField={setEditingField}
              handleEditSave={handleEditSave}
            />
          ) : (
            <AddField setFields={setFields} fields={fields} logic={logic} setLogic={setLogic}/>
          )}
        </div>
      </div>
      <Button
        variant="contained"
        className="saveBtn"
        onClick={() => handleSave(false)}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="success"
        className="publishBtn"
        onClick={() => handleSave(true)}
        disabled={isPublished}
      >
        Publish
      </Button>
    </div>
  );
};

export default NewForm;
