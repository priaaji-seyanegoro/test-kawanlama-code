const perkalianSederhana = (j, k) => {
  let hasil = 0;

  while (j > 0) {
    hasil += k;
    j--;
  }

  return hasil;
};

console.log(perkalianSederhana(5, 4));

/* Keselahannya terletak pada return dari function tsbt,
yang direturn bukan variable total melainkan hasil yang dimana variable
hasil valuenya tidak berubah */
