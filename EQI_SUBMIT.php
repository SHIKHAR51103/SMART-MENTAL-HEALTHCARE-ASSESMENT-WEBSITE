<?php
$servername = "localhost:3507";
$username = "root";
$password = "";
$dbname = "eq_test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Ensure all expected POST data is received
  $required_fields = ['name', 'age', 'gender', 'selfAwareness1', 'selfAwareness2', 'selfAwareness3', 'selfManagement1', 'selfManagement2', 'selfManagement3', 'socialAwareness1', 'socialAwareness2', 'socialAwareness3', 'relationshipManagement1', 'relationshipManagement2', 'relationshipManagement3'];
  
  $missing_fields = [];
  foreach ($required_fields as $field) {
    if (!isset($_POST[$field])) {
      $missing_fields[] = $field;
    }
  }

  if (!empty($missing_fields)) {
    die("Missing fields: " . implode(", ", $missing_fields));
  }

  $name = $_POST['name'];
  $age = $_POST['age'];
  $gender = $_POST['gender'];
  $selfAwareness1 = $_POST['selfAwareness1'];
  $selfAwareness2 = $_POST['selfAwareness2'];
  $selfAwareness3 = $_POST['selfAwareness3'];
  $selfManagement1 = $_POST['selfManagement1'];
  $selfManagement2 = $_POST['selfManagement2'];
  $selfManagement3 = $_POST['selfManagement3'];
  $socialAwareness1 = $_POST['socialAwareness1'];
  $socialAwareness2 = $_POST['socialAwareness2'];
  $socialAwareness3 = $_POST['socialAwareness3'];
  $relationshipManagement1 = $_POST['relationshipManagement1'];
  $relationshipManagement2 = $_POST['relationshipManagement2'];
  $relationshipManagement3 = $_POST['relationshipManagement3'];

  $stmt = $conn->prepare("INSERT INTO results (name, age, gender, selfAwareness1, selfAwareness2, selfAwareness3, selfManagement1, selfManagement2, selfManagement3, socialAwareness1, socialAwareness2, socialAwareness3, relationshipManagement1, relationshipManagement2, relationshipManagement3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
  $stmt->bind_param("sisiiiiiiiiiiii", $name, $age, $gender, $selfAwareness1, $selfAwareness2, $selfAwareness3, $selfManagement1, $selfManagement2, $selfManagement3, $socialAwareness1, $socialAwareness2, $socialAwareness3, $relationshipManagement1, $relationshipManagement2, $relationshipManagement3);

  if ($stmt->execute()) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();
}
?>
