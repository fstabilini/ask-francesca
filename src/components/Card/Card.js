import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

export default function Card({ image, title, id }) {
  const navigate = useNavigate();

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  }

  const truncatedTitle = truncateText(title, 25);

  function seeDetail() {
    navigate(`/recipe-detail/${id}`);
  }

  return (
    <div className="card" onClick={seeDetail}>
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

// la lup la tengo en home y hay que ponerla en la pagina de buscar recetas

// fire base
