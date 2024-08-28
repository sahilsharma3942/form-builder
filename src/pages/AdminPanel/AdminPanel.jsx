import React, { useEffect, useState } from "react";
import "./AdminPanel.scss";
import Dialog from "../../components/Dialog/DialogComp";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [forms,setForms] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchForms = async () => {
      try {
        const formsCollection = collection(db, "forms");
        const formsSnapshot = await getDocs(formsCollection);
        const formsList = formsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setForms(formsList) ;
      } catch (error) {}
    };

    fetchForms();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "forms", id));
      setForms(forms.filter(form => form.id !== id));
    } catch (error) {
      console.error("Error deleting form: ", error);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSave=(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const formName = formJson.formName;
    const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 1000); // Random number to add more uniqueness
    const id = `${timestamp}-${randomNum}`;
    navigate(`/new/${id}/${formName}`); //navigating to new form with new id and name
    handleClose();
  }
  return (
    <div className="admin">
      <Header />
      <div className="adminBody">
        <div className="newFormCard">
          <img src="./assets/plus.png" alt="" className="plus"></img>
          <span onClick={handleClickOpen} className="newFormText">
            New Form
          </span>
          <Dialog title={"Create Feedback Form"} open={open} handleClose={handleClose} handleSave={handleSave}/>
        </div>

        {forms.map((form) => (
          <Card form={form} key={form.id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
