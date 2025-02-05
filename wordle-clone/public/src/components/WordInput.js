import React from "react";

const WordInput = ({ value, setValue, onSubmit, disabled }) => {
  return (
    <div className="flex space-x-2">
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value.toLowerCase())} 
        maxLength={5}
        disabled={disabled}
        className="border-2 border-gray-300 p-2 text-xl uppercase"
      />
      <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
};

export default WordInput;
