import React from "react";

const Message = ({ status, word, onRestart }) => {
  return (
    <div className="text-center mt-4">
      {status === "won" && <h2 className="text-green-500 text-2xl font-bold">You Won! 🎉</h2>}
      {status === "lost" && <h2 className="text-red-500 text-2xl font-bold">You Lost! The word was "{word}"</h2>}
      <button onClick={onRestart} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">New Game</button>
    </div>
  );
};

export default Message;
