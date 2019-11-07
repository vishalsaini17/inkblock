<?php
$servername='localhost';
$username='root';
$password='';
$dbname='inkblockstudio';

// Create connection
$conn=mysqli_connect($servername,$username,$password,$dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM projects ORDER BY id";
$result = mysqli_query($conn, $sql);
$resulti = mysqli_query($conn, $sql);
?>