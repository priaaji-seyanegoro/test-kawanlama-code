const generateWord = (to) => {
  let param = "USOMAANAPAIUMASYDNIP";
  let j = 0;
  let i = 0;
  let newString = "";
  let result = [];
  param = param.toLowerCase();
  while (param.length !== i) {
    if (param[i] === to[j]) {
      newString += param[i];
      param = param.slice(0, i) + param.slice(i + 1);
      j++;
      i = 0;
      if (newString === to) {
        result.push(newString);
        newString = "";
        i = 0;
        j = 0;
      }
    }
    i++;
  }
  return {
    kalimat: to,
    jumlah_kata: result.length,
  };
};

console.log(generateWord("siapa"));
