import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import "./Website.scss";
import CloseIcon from '@mui/icons-material/Close';

function Website() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchFormData = async () => {
      const formsCollection = collection(db, "forms");
      const q = query(
        formsCollection,
        where("isPublished", "==", true)
      );
      const querySnapshot = await getDocs(q);

      // Get current date and time
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // Format: HH:MM

      if (!querySnapshot.empty) {
        // Check each form's logic
        for (const formDoc of querySnapshot.docs) {
          const data = formDoc.data();
          const formId = formDoc.id;
          
          // Check logic conditions
          const matchesUrl = data.logic.url === location.pathname;
          const matchesDate = !data.logic.date || new Date(data.logic.date) <= new Date(currentDate);
          const matchesTime = !data.logic.time || data.logic.time <= currentTime;

          const isSubmitted = localStorage.getItem(`form_${formId}_submitted`);
          
          if (matchesUrl && matchesDate && matchesTime && !isSubmitted) {
            setFormData({ ...data, id: formId });
            setShowModal(true);
            return; // Exit the loop once we find a matching form
          }
        }
        
        // No matching form found
        setShowModal(false);
      } else {
        setShowModal(false);
      }
    };

    fetchFormData();
  }, [location.pathname]);

  const handleCloseModal = () => {
    // Set localStorage flag to prevent reappearing
    localStorage.setItem(`form_${formData.id}_viewed`, 'true');
    
    setShowModal(false);
    setFormData(null); // Clear form data when closing the modal
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      {showModal && formData && (
        <div className="modal-overlay">
          <CloseIcon className="close-button" onClick={handleCloseModal} />
          <CustomForm
            id={formData.id}  
            name={formData.name}
            fields={formData.fields}
            editMode={false}
            handleCloseModal={handleCloseModal}
          />
        </div>
      )}
    </>
  );
}

export default Website;
