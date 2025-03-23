<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Fingerprint Attendance System</title>
</head>

<body>
    <h2>Student Attendance System (Fingerprint)</h2>

    <!-- <h3>1. Register Fingerprint</h3>
    <form method="POST" action="register.php">
        <input type="text" name="name" placeholder="Enter Student Name" required>
        <input type="text" name="student_id" placeholder="Student ID" required>
        <button type="button" onclick="captureFingerprint('register')">Register Fingerprint</button>
        <input type="hidden" id="fingerprint_id" name="fingerprint_id">
    </form>

    <h3>2. Mark Attendance</h3>
    <form method="POST" action="mark_attendance.php">
        <button type="button" onclick="captureFingerprint('attendance')">Mark Attendance</button>
        <input type="hidden" id="attendance_fingerprint_id" name="fingerprint_id">
    </form>

    <script src="assets/webauthn.js"></script> -->

    <h3>1. Register Fingerprint</h3>
    <form method="POST" action="register.php">
        <input type="text" name="name" placeholder="Enter Student Name" required>
        <input type="text" name="student_id" placeholder="Student ID" required>
        <button type="button" onclick="captureFingerprint('register')">Register Fingerprint</button>
        <input type="hidden" id="fingerprint_id" name="fingerprint_id">
    </form>

    <h3>2. Mark Attendance</h3>
    <form method="POST" action="mark_attendance.php">
        <button type="button" onclick="captureFingerprint('attendance')">Mark Attendance</button>
        <input type="hidden" id="attendance_fingerprint_id" name="fingerprint_id">
    </form>

    <script src="assets/webauthn.js"></script>

</body>

</html>
