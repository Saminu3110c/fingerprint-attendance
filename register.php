<?php

function encryptData($data, $key = 'secret_key') {
    return openssl_encrypt($data, 'aes-256-cbc', $key, 0, '1234567891011121');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $student_id = htmlspecialchars($_POST['student_id']);
    $fingerprint_id = htmlspecialchars($_POST['fingerprint_id']);

    if (!$name || !$student_id || !$fingerprint_id) {
        exit('Invalid Input');
    }

    $file = 'students.json';
    $students = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    // Check if student already exists
    foreach ($students as $student) {
        if ($student['student_id'] === $student_id) {
            exit('Student already registered.');
        }
    }

    $encryptedFingerprint = encryptData(hash('sha256', $fingerprint_id));
    $students[] = [
        'student_id' => $student_id,
        'name' => $name,
        'fingerprint_id' => $encryptedFingerprint,
        'attendance' => []
    ];

    file_put_contents($file, json_encode($students, JSON_PRETTY_PRINT));
    echo "Registration Successful!";
}
?>
