const intAdd = (string) => {
  if (string === "") return 0;
  const myRegex = /^[\/]{2}(.)/;
  const delimMatch = myRegex.exec(string);
  if (delimMatch) {
    const delim = delimMatch[1];
    const delimValue = string
      .replace("\n", "")
      .split(delim)
      .map((num) => parseInt(num))
      .filter((num) => num > 0)
      .reduce((num, i) => num + i, 0);
    return delimValue;
  } else {
    let negatives = [];
    let finalValue = [];
    let currentString = string
      .replace("\n", "")
      .split(",")
      .map((num) => parseInt(num));
    currentString.forEach((e) => {
      if (e < 0) {
        negatives.push(e);
      } else if (e < 1000) {
        finalValue.push(e);
      }
    });
    if (negatives.length !== 0) {
      throw `Negatives not allowed, value(s) of${negatives.map(
        (e) => ` ${e}`
      )} found.`;
    }
    finalValue = finalValue.reduce((num, i) => num + i, 0);
    return finalValue;
  }
};

module.exports = intAdd;
