export const encode = (input) => {
  const characters = String(input);
  let repetitions = 0;
  let previousChar = null;
  let encoding = '';

  for (let i = 0; i < characters.length; i += 1) {
    const currentChar = characters[i];

    // only on the first character
    if (previousChar === null) {
      previousChar = currentChar;
    }

    if (previousChar === currentChar) {
      repetitions += 1;
    } else {
      encoding += `${repetitions > 1 ? repetitions : ''}${previousChar}`;
      previousChar = currentChar;
      repetitions = 1;
    }

    if (i === characters.length - 1) {
      encoding += `${repetitions > 1 ? repetitions : ''}${previousChar}`;
    }
  }

  return encoding;
};

export const decode = (input) => {
  const characters = String(input);
  let repeater = '';
  let decoding = '';

  for (let i = 0; i < characters.length; i += 1) {
    if (/\d+/.test(characters[i])) {
      repeater += String(characters[i]);
    } else {
      decoding += String(characters[i]).repeat(Number(repeater) || 1);
      repeater = '';
    }
  }

  return decoding;
};
