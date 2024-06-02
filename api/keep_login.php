<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

$response = ['status' => 'error', 'message' => 'Not logged in'];

if (isset($_COOKIE['user_id'])) {
    $user_id = $_COOKIE['user_id'];
    $sql = "SELECT * FROM users WHERE id='$user_id'";

    $result = $db->query($sql);

    if ($result && $result->num_rows > 0) {
        $data = $result->fetch_assoc();
        $response = ['status' => 'success', 'user' => $data];
    } else {
        $response['message'] = 'User not found';
    }
}

echo json_encode($response);
