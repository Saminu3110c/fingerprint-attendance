<?php

function decryptData($data, $key = 'secret_key') {
    return openssl_decrypt($data, 'aes-256-cbc', $key, 0, '1234567891011121');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fingerprint_id = htmlspecialchars($_POST['fingerprint_id']);
    if (!$fingerprint_id) exit('Invalid fingerprint data.');

    $file = 'students.json';
    if (!file_exists($file)) exit('No students registered.');

    $students = json_decode(file_get_contents($file), true);
    $date = date('Y-m-d');
    $hashedFingerprint = hash('sha256', $fingerprint_id);

    $attendanceMarked = false;

    foreach ($students as &$student) {
        $decryptedFingerprint = decryptData($student['fingerprint_id']);
        if ($decryptedFingerprint === $hashedFingerprint) {
            if (!in_array($date, $student['attendance'])) {
                $student['attendance'][] = $date;
                file_put_contents($file, json_encode($students, JSON_PRETTY_PRINT));
                $attendanceMarked = true;
                echo "Attendance marked for: " . $student['name'];
                break;
            } else {
                echo "Attendance already recorded for today.";
                exit;
            }
        }
    }

    if (!$attendanceMarked) {
        echo "Fingerprint not recognized.";
    }
}
?>
