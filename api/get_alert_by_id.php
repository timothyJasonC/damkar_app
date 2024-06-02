<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$alert_id = $request['id'];

try {
    $sql = "SELECT alert.id AS alert_id, alert.name AS client, alert.message, alert.location, users.name AS author, users.email AS contact FROM alert INNER JOIN users ON alert.user_id = users.id WHERE alert.id='$alert_id' ";
    if ($db->query($sql)) {
        $result = $db->query($sql);
        $data = $result->fetch_assoc();

        $response['alert'] = $data;
    } else {
        $response['alert'] = 'Alert tidak ada';
    }
} catch (mysqli_sql_exception $e) {
    $response['alert'] = 'error';
} finally {
    $db->close();
}

echo json_encode($response);


