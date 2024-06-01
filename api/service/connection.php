<?php

$hostname = 'localhost';
$username = 'root';
$password = '';
$database_name = 'damkar';

$db = new mysqli($hostname, $username, $password, $database_name);

if($db->connect_error) {
    echo 'koneksi database rusak';
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}