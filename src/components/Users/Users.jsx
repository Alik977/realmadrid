import "./Users.css";

function Users({ users }) {
  return (
    <div className="users-page">
      <h1 className="users-title">Real Madrid Fan Members 🤍👑</h1>

      <div className="users-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.avatar} alt={user.fullName} className="user-avatar" />
            <div className="user-info">
              <h2>{user.fullName}</h2>
              <p><strong>📧 Email:</strong> {user.email}</p>
              <p><strong>⭐ Favorite Player:</strong> {user.favoritePlayer}</p>
              <p><strong>📍 Location:</strong> {user.location}</p>
              <p className="user-bio">{user.bio}</p>
              <p className="user-joined">Joined: {user.joinedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
