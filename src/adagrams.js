export const drawLetters = () => {
  // Implement this method for wave 1

  const LETTER_POOL = {'A': 9,'B': 2,'C': 2,'D': 4,'E': 12,'F': 2,'G': 3,'H': 2,'I': 9,'J': 1,'K': 1,'L': 4,
      'M': 2,'N': 6,'O': 8,'P': 2,'Q': 1,'R': 6,'S': 4,'T': 6,'U': 4,'V': 2,'W': 2,'X': 1,'Y': 2,'Z': 1};

  const drawLetters= [];
  const letterPool=[];

    for (const letter in LETTER_POOL) {
        for (let i=0; i < LETTER_POOL[letter];i++);{
            
            letterPool.push(letter)
        }
    }
    for  (let i = 0; i< 10; i++){
        const i = Math.floor(Math.random() * letterPool.length);
        const letter = letterPool[i];
        drawLetters.push(letter);
        letterPool.splice(i, 1);
    }
    return drawLetters
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterDict = {}

  for (const letter of lettersInHand){
    if (!letterDict[letter]){
      letterDict[letter] = 1;
    }
    else { 
      letterDict[letter] += 1;
    }
  }
  for (const letter of input){
    if (letter in letterDict && letterDict[letter] > 0){
      letterDict[letter] -= 1;
      continue
    }
    else {
      return false 
    }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
