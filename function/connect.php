<?php 

$server = "localhost";
$username = "if0_38504149";
$password = "Nabil1137";
$database = "if0_38504149_db_kelolasampah";

$koneksi = mysqli_connect($server,$username,$password,$database);

if (!$koneksi) {
    die("Koneksi Gagal: " . mysqli_connect_error());
} 
?>