<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

try {
    $sql = 'SELECT alert.id AS alert_id, alert.name AS client, alert.message, alert.location, users.email AS contact FROM alert INNER JOIN users ON alert.user_id = users.id';
    if ($db->query($sql)) {
        $result = $db->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);

        $response['alerts'] = $data;
    } else {
        $response['alerts'] = 'Alerts tidak ada';
    }
} catch (mysqli_sql_exception $e) {
    $response['alerts'] = 'error';
} finally {
    $db->close();
}

echo json_encode($response);


