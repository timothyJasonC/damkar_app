<?php

include 'service/connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$title = isset($_POST['title']) ? $_POST['title'] : '';
$content = isset($_POST['content']) ? $_POST['content'] : '';
$file = isset($_FILES["file"]) ? $_FILES["file"] : null;
$user_id = $_COOKIE['user_id'];

if ($file && $content && $title && $user_id) {
    $target_dir = "uploads/";
    if (!is_dir($target_dir)) {
        mkdir($target_dir, 0777, true);
    }
    //disini itu ngebuat uniq id yang bakal ngerename image nya pake uniqid, terus dipasang di target file(biar gambar nya ngehit ke file direktori itu)
    $unique_id = uniqid('', true);
    $original_file_name = pathinfo($file["name"], PATHINFO_FILENAME);
    $file_extension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    $target_file = $target_dir . $original_file_name . '_' . $unique_id . '.' . $file_extension;

    // ngecek file berupa gambar atau bukan 
    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        echo json_encode(["status" => "error", "message" => "File is not an image."]);
        exit();
    }

    // mengirimkan file ke direktori baru ke folder yang ditarget untuk kasus ini ke uploads/
    // dan membuat data berita baru
    if (move_uploaded_file($file["tmp_name"], $target_file)) {
        try {
            $sql = "INSERT INTO news (title, content, image, author_id) VALUES  ('$title','$content', '$target_file', '$user_id')";
            if ($db->query($sql)) {
                echo json_encode(["status" => "success", "message" => "Berita berhasil dibuat"]);
            } else {
                echo json_encode(["status" => "error", "message" => 'Berita gagal di buat']);
            }
        } catch (mysqli_sql_exception $e) {
            echo json_encode(["status" => "error", "message" => "Maaf, ada masalah saat membuat berita, mohon coba lagi nanti"]);
        } finally {
            $db->close();
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Maaf, ada masalah saat update file, mohon coba lagi nanti"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Data tidak lengkap"]);
}
