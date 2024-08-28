import React from 'react';
import "./Submissions.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from 'react-router-dom';


const Submissions = () => {
  return (
    <div className='submissionWrapper'>
        <form className="submissions">
      <div className="submissionHeader">
        <Link to={"/admin"}>
          <ArrowBackIosIcon className="backBtn" />
        </Link>
        <h2 className="submissionHeading">Submissions</h2>
      </div>
      <div className="submissionBody">
        
      </div>
    </form>
    </div>
  )
}

export default Submissions