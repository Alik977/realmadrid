import { Link } from "react-router-dom";
import "./Legends.css";

export default function Legends({ players }) {
  return (
    <section className="legends-section">
      <h1 className="page-title">Real Madrid Legends</h1>

      <div className="cards-container">
        {players.map((player) => (
          <div className="card" key={player.id}>
            <Link to={`/players/${player.id}`} className="card-link">
              <img src={player.image} alt={player.firstName} className="card-img" />
              <div className="card-info">
                <h3>{player.firstName} {player.lastName}</h3>
                <p>{player.info.slice(0, 60)}...</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
