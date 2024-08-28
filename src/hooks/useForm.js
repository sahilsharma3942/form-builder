import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";


const useForm = (id) => {
  const [fields, setFields] = useState([]);
  const [isPublished, setIsPublished]= useState(false);
  const [logic,setLogic] = useState({});
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const docRef = doc(db, "forms", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setIsPublished(data.isPublished);
          setFields(data.fields);
          setLogic(data?.logic);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching form data: ", error);
      }
    };
    fetchFormData();
  }, [id]);

  return {fields,setFields,isPublished,setIsPublished,logic,setLogic};
};

export default useForm;
