<?php
// Set headers to allow cross-origin requests and specify JSON response
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database connection details
$servername = "localhost:3507";
$username = "root";
$password = "";
$dbname = "wais_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

// Get the JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data is set and not empty
if (isset($data['name'], $data['age'], $data['gender'], $data['score'], $data['elapsed_time'])) {
    // Extract variables from JSON data
    $name = $data['name'];
    $age = $data['age'];
    $gender = $data['gender'];
    $score = $data['score'];
    $elapsed_time = $data['elapsed_time'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO wais_responses (name, age, gender, score, elapsed_time, submission_time) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("sisdd", $name, $age, $gender, $score, $elapsed_time);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(array("success" => "New record created successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $stmt->error));
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(array("error" => "Invalid input data"));
}

// Close the connection
$conn->close();
?>
