<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

try {
    $sql = 'SELECT news.id AS news_id, news.title AS title, news.content, news.created_at, news.image, users.name FROM news INNER JOIN users ON news.author_id = users.id';
    if ($db->query($sql)) {
        $result = $db->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);

        $response['news'] = $data;
    } else {
        $response['news'] = 'Berita tidak ada';
    }
} catch (mysqli_sql_exception $e) {
    $response['news'] = 'error';
} finally {
    $db->close();
}

echo json_encode($response);


