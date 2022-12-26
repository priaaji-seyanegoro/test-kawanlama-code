const perkalianSederhana = (j, k) => {
  let hasil = 0;

  while (j > 0) {
    hasil += k;
    j--;
  }

  return hasil;
};

console.log(perkalianSederhana(5, 4));
