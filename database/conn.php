<?php
$server_name = $_SERVER['SERVER_NAME'];

if($server_name == 'localhost' || $server_name == '127.0.0.1'){
  $servername='localhost';
  $username='root';
  $password='';
  $dbname='inkblockstudio';
}
else{
  $servername='localhost';
  $username='inkblvo8_admin';
  $password='Jatin!@#321';
  $dbname='inkblvo8_db';
}

// Create Server Connection
$conn = mysqli_connect($servername,$username,$password,$dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM projects ORDER BY id";
$result = mysqli_query($conn, $sql);
$resulti = mysqli_query($conn, $sql);
?>
