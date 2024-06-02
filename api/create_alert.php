<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$name = $request['name'];
$location = $request['location'];
$message = $request['message'];

$user_id = $_COOKIE['user_id'];

if ($name && $location && $message) {
    try {
        $sql = "INSERT INTO alert (name, location, message, user_id) VALUES  ('$name','$location', '$message', '$user_id')";

        if ($db->query($sql)) {
            $response['message'] = 'Alert berhasil dibuat';
        } else {
            $response['message'] = 'Alert gagal di buat';
        }
    } catch (mysqli_sql_exception $e) {
        $response['message'] = 'Ada masalah coba lagi nanti';
    } finally {
        $db->close();
    }
} else {
    $response['message'] = 'Data tidak lengkap';
}

echo json_encode($response);
