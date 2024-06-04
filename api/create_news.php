<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$title = isset($_POST['title']) ? $_POST['title'] : '';
$content = isset($_POST['content']) ? $_POST['content'] : '';
$summary = isset($_POST['summary']) ? $_POST['summary'] : '';
$file = isset($_FILES["file"]) ? $_FILES["file"] : null;
$user_id = isset($_COOKIE['user_id']) ? $_COOKIE['user_id'] : null;

if ($file && $content && $title && $user_id && $summary) {
    $target_dir = "uploads/";
    if (!is_dir($target_dir)) {
        mkdir($target_dir, 0777, true);
    }

    $unique_id = uniqid('', true);
    $original_file_name = pathinfo($file["name"], PATHINFO_FILENAME);
    $file_extension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    $target_file = $target_dir . $original_file_name . '_' . $unique_id . '.' . $file_extension;

    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        echo json_encode(["status" => "error", "message" => "File is not an image."]);
        exit();
    }

    if (move_uploaded_file($file["tmp_name"], $target_file)) {
        try {
            $db->begin_transaction();
            $stmt = $db->prepare("INSERT INTO news (title, summary, content, image, author_id) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssi", $title, $summary, $content, $target_file, $user_id);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Berita berhasil dibuat"]);
                $db->commit();
            } else {
                echo json_encode(["status" => "error", "message" => 'Berita gagal dibuat']);
                $db->rollback();
            }
        } catch (mysqli_sql_exception $e) {
            echo json_encode(["status" => "error", "message" => "Maaf, ada masalah saat membuat berita, mohon coba lagi nanti"]);
            $db->rollback();
        } finally {
            $stmt->close();
            $db->close();
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Maaf, ada masalah saat mengunggah file, mohon coba lagi nanti"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Data tidak lengkap"]);
}
