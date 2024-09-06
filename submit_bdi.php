<?php
// Database configuration
$servername = "localhost:3507"; 
$username = "root"; 
$password = ""; 
$dbname = "bdi_database"; 

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = mysqli_real_escape_string($conn, $_POST['name']);
$age = mysqli_real_escape_string($conn, $_POST['age']);
$gender = mysqli_real_escape_string($conn, $_POST['gender']);
$bdi_score = 0; // Initialize BDI score

// Calculate BDI score from the questionnaire responses
foreach ($_POST as $key => $value) {
    if (strpos($key, 'question') === 0) {
        $bdi_score += (int)$value; // Sum scores for all questions
    }
}

// SQL query to insert data into the database
$sql = "INSERT INTO bdi_responses (name, age, gender, bdi_score) VALUES ('$name', '$age', '$gender', '$bdi_score')";

// Execute the query and handle errors
if ($conn->query($sql) === TRUE) {
    echo "Data submitted successfully!<br>";
    echo "Your BDI Score is: " . $bdi_score;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
