import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Lobby.css";

export default function Room() {
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div className="meeting">
      <div className="card">
        <input
          className="meeting-text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <br />
        <button className="btn btn-primary" onClick={handleJoinRoom}>
          Join
        </button>
      </div>
    </div>
  );
}
