import React, { useState } from "react";
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
      <div className="card__title">
        <h2>{truncatedTitle}</h2>
      </div>
    </div>
  );
}
