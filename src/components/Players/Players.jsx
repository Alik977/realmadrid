import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import "./Players.css";

export const Players = ({ players }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const prod = players.find((elm) => elm.id === +id);

  const goBack = () => {
    navigate(-1);
  };


  if (!prod) {
    return (
      <section className="player-section">
        <div className="container">
          <button className="prodBtn" onClick={goBack}>
            Go Back
          </button>
          <h2 className="not-found">Player not found 😔</h2>
        </div>
      </section>
    );
  }


  return (
    <section className="player-section">
      <div className="container">
        <div className="player">
          <button className="prodBtn" onClick={goBack}>
            Go Back
          </button>

          <div className="prodBox">
            <img className="prodImg" src={prod.image} alt={prod.firstName} />
            <div className="prodText">
              <h1 className="prodTitle">
                {prod.firstName} {prod.lastName}
              </h1>
              <p className="prodDesc">{prod.info}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;
