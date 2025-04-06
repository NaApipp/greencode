<?php
include 'connect.php';

// Pastikan data dikirim melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $nama  = mysqli_real_escape_string($koneksi, $_POST["nama"]);
    $email = mysqli_real_escape_string($koneksi, $_POST["email"]);
    $alamat  = mysqli_real_escape_string($koneksi, $_POST["alamat"]);
    $telepon = mysqli_real_escape_string($koneksi, $_POST["telepon"]);
    $kota  = mysqli_real_escape_string($koneksi, $_POST["kota"]);
    $berat = mysqli_real_escape_string($koneksi, $_POST["berat"]);
    $jenis = mysqli_real_escape_string($koneksi, $_POST["jenis"]);

    // Query untuk menyimpan data
    $query = "INSERT INTO kelola_sampah (nama, email, alamat, telepon, kota, berat, jenis) 
              VALUES ('$nama', '$email', '$alamat', '$telepon', '$kota', '$berat', '$jenis')";

$result = mysqli_query($koneksi, $query);
if(!$result){
    die("Query Eror:".mysqli_error($koneksi));
} else {
    echo "data berhasil dimasukkan ke database";
}
header("location: ../kelola-sampah-berhasil.html#caution"); 
}
?> 