<?php
// Set headers for cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database connection details
$servername = "localhost:3507";
$username = "root";
$password = "";
$dbname = "pss_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

// Get JSON data from request
$data = json_decode(file_get_contents("php://input"), true);

// Validate received data
if (isset($data['name'], $data['age'], $data['gender'], $data['score'])) {
    $name = htmlspecialchars($data['name']);
    $age = filter_var($data['age'], FILTER_VALIDATE_INT);
    $gender = htmlspecialchars($data['gender']);
    $score = filter_var($data['score'], FILTER_VALIDATE_INT);

    if ($name && $age !== false && $gender && $score !== false) {
        // Prepare SQL statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO pss_responses (name, age, gender, score, submission_time) VALUES (?, ?, ?, ?, NOW())");
        $stmt->bind_param("sisi", $name, $age, $gender, $score);

        // Execute statement and check for errors
        if ($stmt->execute()) {
            echo json_encode(array("success" => "Data stored successfully."));
        } else {
            echo json_encode(array("error" => "Error: " . $stmt->error));
        }

        // Close statement
        $stmt->close();
    } else {
        echo json_encode(array("error" => "Invalid input data."));
    }
} else {
    echo json_encode(array("error" => "Incomplete input data."));
}

// Close database connection
$conn->close();
?>
