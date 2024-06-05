const getArgs = (args) => {
  const res = {};
  const [executor, file, ...rest] = args;

  rest.forEach((val, index, array) => {
    if (val === "-s") {
      res["s"] = getWordsAfterOption("-s", array);
    } else {
      if (val.charAt(0) === "-") {
        if (array[index + 1].charAt(0) !== "-") {
          res[val.substring(1)] = array[index + 1];
        }
      }
    }
  });
  return res;
};

const getWordsAfterOption = (option, rest) => {
  const words = [];
  let capture = false;

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (capture) {
      if (arg.startsWith("-")) {
        capture = false;
      } else {
        words.push(arg);
      }
    }
    if (arg === option) {
      capture = true;
    }
  }
  return words;
};

export { getArgs };
