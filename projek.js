function hitung() {
  let nama = document.getElementById("nama").value;
  let produk = document.getElementById("produk").value;
  let harga = parseInt(document.getElementById("harga").value);
  let jumlah = parseInt(document.getElementById("jumlah").value);

  // Validasi input
  if (!nama || !produk || isNaN(harga) || isNaN(jumlah)) {
    alert("Semua input wajib diisi dengan benar!");
    return;
  }

  // Perhitungan
  let totalBelanja = harga * jumlah;
  let potongan = totalBelanja >= 400000 ? 50000 : 0;
  let totalBayar = totalBelanja - potongan;

  // Output hasil
  document.getElementById("hasil").innerHTML = `
    <h3>Hasil Perhitungan</h3>
    <p><strong>Nama Pelanggan :</strong> ${nama}</p>
    <p><strong>Nama Produk :</strong> ${produk}</p>
    <p><strong>Total Belanja :</strong> Rp ${totalBelanja.toLocaleString("id-ID")}</p>
    <p><strong>Potongan :</strong> Rp ${potongan.toLocaleString("id-ID")}</p>
    <p><strong>Total Bayar :</strong> Rp ${totalBayar.toLocaleString("id-ID")}</p>
  `;
}
