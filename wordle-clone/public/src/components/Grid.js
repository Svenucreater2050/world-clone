import React from "react";

const Grid = ({ guesses }) => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const letter = guesses[rowIndex]?.word[colIndex] || "";
            const color = guesses[rowIndex]?.feedback[colIndex] || "border-gray-300";
            return (
              <div key={colIndex} className={`w-12 h-12 flex items-center justify-center border-2 ${color} text-lg font-bold uppercase`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
