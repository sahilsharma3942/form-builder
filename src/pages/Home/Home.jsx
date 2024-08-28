import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.scss";

const Home = () => {
const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  function prevSlide(){
    setCurrentSlide(currentSlide===0?2:(prev)=>prev-1);
  }

  function nextSlide(){
    setCurrentSlide(currentSlide===2?0:(prev)=>prev+1);
  }

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowBackIcon onClick={prevSlide} />
        </div>
        <div className="icon">
          <ArrowForwardIcon onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
