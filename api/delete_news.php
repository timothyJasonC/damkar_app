<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$user_id = $_COOKIE['user_id'];

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);
$id = $request['id'];

try {
    $delete = "DELETE FROM news WHERE id = '$id'";
    if ($db->query($delete)) {
        $response['message'] = 'Berita berhasil dihapus';
    } else {
        $response['message'] = 'Berita gagal dihapus';
    }
} catch (mysqli_sql_exception $e) {
    $response['message'] = 'Ada masalah coba lagi nanti';
} finally {
    $db->close();
}

echo json_encode($response);
