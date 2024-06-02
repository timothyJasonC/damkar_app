<?php

include 'service/connection.php';


header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$email = $request['email'];
$password = $request['password'];

if ($email && $password) {
    $hash_password = hash('sha256', $password);

    try {
        $sql = "SELECT * FROM users WHERE email='$email' AND password='$hash_password'";

        if ($db->query($sql)) {
            $result = $db->query($sql);
            $data = $result->fetch_assoc();

            setcookie('user_id', $data['id'], time() + (86400 * 30), "/"); 
            $response['user'] = $data;
        } else {
            $response['user'] = 'Akun tidak ada';
        }
    } catch (mysqli_sql_exception $e) {
        $response['user'] = 'Gagal login';
    } finally {
        $db->close();
    }

} else {
    $response['user'] = 'Data tidak lengkap';
}

echo json_encode($response);