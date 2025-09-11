<?php
include 'connect.php';

// Pastikan data dikirim melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // nama
    $nama = mysqli_real_escape_string($koneksi, $_POST["nama"]);
    // email
    $email = mysqli_real_escape_string($koneksi, $_POST["email"]);
    // alamat
    $alamat = mysqli_real_escape_string($koneksi, $_POST["alamat"]);
    // telepon
    $telepon = mysqli_real_escape_string($koneksi, $_POST["telepon"]);
    // provinsi
    $provinsi = mysqli_real_escape_string($koneksi, $_POST["provinsi"]); // Variabel yang benar
    // kabupaten
    $kabupaten = mysqli_real_escape_string($koneksi, $_POST["kabupaten"]);
    // kecamatan
    $kecamatan = mysqli_real_escape_string($koneksi, $_POST["kecamatan"]);
    // kelurahan
    $kelurahan = mysqli_real_escape_string($koneksi, $_POST["kelurahan"]);
    // berat
    $berat = mysqli_real_escape_string($koneksi, $_POST["berat"]);
    // jenis sampah
    $jenis = mysqli_real_escape_string($koneksi, $_POST["jenis"]);

    $query = "INSERT INTO kelola_sampah (nama, email, alamat, telepon, provinsi, kabupaten, kecamatan, kelurahan, berat, jenis) 
                            VALUES ('$nama', '$email', '$alamat', '$telepon', '$provinsi', '$kabupaten', '$kecamatan', '$kelurahan', '$berat', '$jenis')";

    $result = mysqli_query($koneksi, $query);
    if(!$result){
        die("Query Eror:".mysqli_error($koneksi));
    } else {
        echo "data berhasil dimasukkan ke database";
    }
    header("location: ../kelola-sampah.html#form"); 
}
?>