<?php

include 'service/connection.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$name = $request['username'];
$email = $request['email'];
$password = $request['password'];

if ($name && $email && $password) {
    $hash_password = hash('sha256', $password);

    try {
        $sql = "INSERT INTO users (name, email, password,isAdmin) VALUES  ('$name','$email', '$hash_password', true)";

        if ($db->query($sql)) {
            $response['message'] = 'Registrasi akun berhasil';
        } else {
            $response['message'] = 'Gagal mendaftarkan akun';
        }
    } catch (mysqli_sql_exception $e) {
        $response['message'] = 'Email sudah ada, silahkan ganti yang lain';
    } finally {
        $db->close();
    }

} else {
    $response['message'] = 'Data tidak lengkap';
}

echo json_encode($response);