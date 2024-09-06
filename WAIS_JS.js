/*document.getElementById('waisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve form values
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  // Hide the form
  document.getElementById('waisForm').style.display = 'none';

  // Display instructions to the patient
  document.getElementById('instructions').innerHTML = "Please press 'y' if the symbol matches the target, or 'n' if it does not.";

  // Set the duration of the subtest (in seconds)
  const duration = 120;

  // Start the timer
  let start_time = new Date().getTime();

  // Initialize score variables
  let correct_answers = 0;
  let total_attempts = 0;

  // Generate and display the symbols
  function displaySymbols() {
    if ((new Date().getTime() - start_time) / 1000 >= duration) {
      clearInterval(symbolInterval);
      endTest();
      return;
    }

    // Generate a random target symbol
    let target_symbol = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Generate a random symbol string
    let symbol_string = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 5; i++) {
      symbol_string += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Display the symbol string and ask the patient if it matches the target symbol
    let response = prompt(`Target symbol: ${target_symbol}\nSymbol string: ${symbol_string}\nDoes the symbol string match the target symbol? (y/n)`).toLowerCase();

    // Record the patient's response and update the score
    total_attempts++;
    if ((response === 'y' && symbol_string.indexOf(target_symbol) !== -1) || (response === 'n' && symbol_string.indexOf(target_symbol) === -1)) {
      correct_answers++;
    }
  }

  // End the test
  function endTest() {
    // When the time limit is reached, stop the timer and record the elapsed time
    let elapsed_time = (new Date().getTime() - start_time) / 1000;

    // Calculate the patient's score
    let score = correct_answers / total_attempts * 100;

    // Display the name, age, and results on the console
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Time elapsed:", elapsed_time.toFixed(2), "seconds");
    console.log("Total attempts:", total_attempts);
    console.log("Correct answers:", correct_answers);
    console.log("Score:", score.toFixed(2), "%");

    // Reset the form for future tests
    document.getElementById('waisForm').reset();
    document.getElementById('waisForm').style.display = 'block';
    document.getElementById('instructions').innerHTML = "In this task, you will see a series of symbols on the screen. Your task is to indicate whether each symbol matches the target symbol. You have 2 minutes to complete as many symbols as possible. Please press 'y' if the symbol matches the target, or 'n' if it does not.";
  }

  // Start the test
  displaySymbols();
  let symbolInterval = setInterval(displaySymbols, 2000);
});*/

document.getElementById('waisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve form values
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  // Store the user data in JSON format
  var userData = {
    "name": name,
    "age": age,
    "gender": gender,
    "scores": []
  };

  // Hide the form
  document.getElementById('waisForm').style.display = 'none';

  // Display instructions to the patient
  document.getElementById('instructions').innerHTML = "Please press 'y' if the symbol matches the target symbol, or 'n' if it does not.";

  // Set the duration of the subtest (in seconds)
  const duration = 120;

  // Start the timer
  let start_time = new Date().getTime();

  // Initialize score variables
  let correct_answers = 0;
  let total_attempts = 0;

  // Generate and display the symbols
  function displaySymbols() {
    if ((new Date().getTime() - start_time) / 1000 >= duration) {
      clearInterval(symbolInterval);
      endTest();
      return;
    }

    // Generate a random target symbol
    let target_symbol = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Generate a random symbol string
    let symbol_string = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 5; i++) {
      symbol_string += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Display the symbol string and ask the patient if it matches the target symbol
    let responseDisplay = document.getElementById('responseDisplay');
    responseDisplay.innerHTML = `Target symbol: ${target_symbol}<br>Symbol string: ${symbol_string}<br>`;

    // Record the patient's response and update the score
    total_attempts++;
    let response = ""; // Initialize response variable
    let responseBtn = document.createElement('button');
    responseBtn.textContent = "Yes";
    responseBtn.onclick = function() {
      response = 'y';
      updateScore();
    };
    responseDisplay.appendChild(responseBtn);

    responseBtn = document.createElement('button');
    responseBtn.textContent = "No";
    responseBtn.onclick = function() {
      response = 'n';
      updateScore();
    };
    responseDisplay.appendChild(responseBtn);

    function updateScore() {
      if ((response === 'y' && symbol_string.indexOf(target_symbol) !== -1) || (response === 'n' && symbol_string.indexOf(target_symbol) === -1)) {
        correct_answers++;
      }
      userData.scores.push({
        "target_symbol": target_symbol,
        "symbol_string": symbol_string,
        "response": response
      });
      document.getElementById('score').innerText = `Correct Answers: ${correct_answers} / Total Attempts: ${total_attempts}`;
    }
  }

  // End the test
  function endTest() {
    // When the time limit is reached, stop the timer and record the elapsed time
    let elapsed_time = (new Date().getTime() - start_time) / 1000;

    // Calculate the patient's score
    let score = correct_answers / total_attempts * 100;

    // Display user data and scores on the screen
    let userDataDisplay = document.getElementById('userData');
    userDataDisplay.innerHTML = `Name: ${userData.name}<br>Age: ${userData.age}<br>Gender: ${userData.gender}<br>Score: ${score.toFixed(2)}%<br>Time Elapsed: ${elapsed_time.toFixed(2)} seconds`;

    // Reset the form for future tests
    document.getElementById('waisForm').reset();
    document.getElementById('waisForm').style.display = 'block';
    document.getElementById('instructions').innerHTML = "In this task, you will see a series of symbols on the screen. Your task is to indicate whether each symbol matches the target symbol. You have 2 minutes to complete as many symbols as possible. Please press 'y' if the symbol matches the target, or 'n' if it does not.";
    document.getElementById('responseDisplay').innerHTML = "";
    document.getElementById('score').innerText = "";
  }

  // Start the test
  displaySymbols();
  let symbolInterval = setInterval(displaySymbols, 2000);
});

