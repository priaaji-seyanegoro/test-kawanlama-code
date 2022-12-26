const daftarBarang = {
  Ruby: {
    harga: 1000000,
    jumlah: 5,
  },
  Permata: {
    harga: 3000000,
    jumlah: 1,
  },
  Topaz: {
    harga: 1250000,
    jumlah: 3,
  },
};

const countMaxPendapatan = () => {
  let pendapatanTotal = 0;
  for (const [key, value] of Object.entries(daftarBarang)) {
    const countjml = value.jumlah / 2;
    const pendapatanPerpasang = countjml * value.harga;
    pendapatanTotal += pendapatanPerpasang;
  }
  return pendapatanTotal;
};

console.log(countMaxPendapatan());
