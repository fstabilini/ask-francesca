import React from "react";
import "./Card.scss";

export default function Card({ image, title }) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  }

  const truncatedTitle = truncateText(title, 25);

  return (
    <div className="card">
      <img src={image} alt={title}></img>
      <div>
        <h2>{truncatedTitle}</h2>
        <ion-icon
          style={{ color: "red", fontSize: "15px" }}
          name="heart"
        ></ion-icon>
        <ion-icon
          style={{ color: "black", fontSize: "15px" }}
          name="heart-outline"
        ></ion-icon>
      </div>
    </div>
  );
}
