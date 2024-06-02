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
$id = $request['id'];

$user_id = $_COOKIE['user_id'];

if ($name && $location && $message) {
    try {
        $sql = "UPDATE alert SET name='$name', location='$location', message='$message' WHERE id='$id'";

        if ($db->query($sql)) {
            $response['message'] = 'Alert berhasil diedit';
        } else {
            $response['message'] = 'Alert gagal dieditt';
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
