export const getFeedback = (word, guess) => {
    return guess.split("").map((letter, index) => {
      if (word[index] === letter) return "green"; // Correct position
      if (word.includes(letter)) return "yellow"; // Wrong position
      return "gray"; // Not in word
    });
  };
  
  export const isValidWord = (guess) => WORDS.includes(guess);
  