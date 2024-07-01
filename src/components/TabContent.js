import { useState } from "react";

export default function TabContent({ activeTabData }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function handleLikes() {
    setLikes((heart) => heart + 1);
  }
  function handleTripleLikes() {
    setLikes((likes) => likes + 3);
  }

  function handleUndo() {
    setLikes(0);
    setShowDetails(false);
  }

  function handleUndoLater() {
    setTimeout(() => {
      setLikes(0);
      setShowDetails(false);
    }, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{activeTabData.summary}</h4>
      {showDetails && <p>{activeTabData.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((prev) => !prev)}>
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <div className="hearts-counter">
          <p>{likes > 0 && likes}</p>
          <span> ❤️</span>
          <button onClick={handleLikes}>+</button>
          <button onClick={handleTripleLikes}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}
