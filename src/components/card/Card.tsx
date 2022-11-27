import React from "react";
import "./Card.scss";

const Card = ({ size, src, text1, text2 }) => {
  return (
    // <div>
    <div className={`card_${size}`}>
      <img src={src} alt="" />
      <p className="first-line">{text1}</p>
      <p className="colored">{text2}</p>
    </div>
    // </div>
  );
};

export default Card;
