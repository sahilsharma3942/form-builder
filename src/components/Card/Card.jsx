import React from "react";
import "./Card.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Card = ({ form, handleDelete }) => {
  return (
    <div className="form-card">
      <div className="form-card-header">
        <img
          src="path_to_icon_image"
          alt="Form Icon"
          className="form-card-icon"
        />
      </div>
      <div className="form-card-body">
        <h3 className="form-card-title">{form.name}</h3>
        <p className="form-card-submitted">Submitted: {"submitted"}</p>
        <p className="form-card-viewed">Viewed: {"viewed"}</p>
        <p className="form-card-date">Date Published: {"datePublished"}</p>
      </div>
      <div className="form-card-footer">
        <Link to={`/submissions/${form.id}`}>
        <Button variant="contained" color="secondary" sx={{ width: "200px" }}>
          View Submission
        </Button></Link>
        <div className="row2">
          <Link to={`/new/${form.id}/${form.name}`} className="cardLink">
            <Button variant="contained" color="success">
              Edit
            </Button>
          </Link>

          <Button variant="contained" color="error" onClick={() => handleDelete(form.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
