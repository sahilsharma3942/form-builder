import React, { useState, useEffect } from 'react';
import "./Submissions.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useParams } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';


const Submissions = () => {
  const { formId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const submissionsCollection = collection(db, 'submissions');
      const q = query(submissionsCollection, where('formId', '==', formId));
      const querySnapshot = await getDocs(q);

      const fetchedSubmissions = querySnapshot.docs.map(doc => doc.data());
      setSubmissions(fetchedSubmissions);
    };

    fetchSubmissions();
  }, [formId]);

  return (
    <div className='submissionWrapper'>
      <div className="submissions">
        <div className="submissionHeader">
          <Link to={"/admin"}>
            <ArrowBackIosIcon className="backBtn" />
          </Link>
          <h2 className="submissionHeading">Submissions</h2>
        </div>
        <div className="submissionBody">
          <h3>Submissions:</h3>
          {submissions.map((submission, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Submission {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {Object.entries(submission.formData).map(([key, field]) => (
                    <div key={key}>
                      <strong>{field.label}</strong>: {field.value}
                    </div>
                  ))}
                  <div><strong>Timestamp:</strong> {submission.timestamp.toDate().toLocaleString()}</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Submissions;
