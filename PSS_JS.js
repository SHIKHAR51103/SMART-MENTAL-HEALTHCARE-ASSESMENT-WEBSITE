/*function calculateScore() {
  var score = 0;

  // Get the answers for each question
  var q1 = parseInt(document.getElementById("q1").value);
  var q2 = parseInt(document.getElementById("q2").value);
  var q3 = parseInt(document.getElementById("q3").value);
  var q4 = parseInt(document.getElementById("q4").value);
  var q5 = parseInt(document.getElementById("q5").value);
  var q6 = parseInt(document.getElementById("q6").value);
  var q7 = parseInt(document.getElementById("q7").value);
  var q8 = parseInt(document.getElementById("q8").value);
  var q9 = parseInt(document.getElementById("q9").value);
  var q10 = parseInt(document.getElementById("q10").value);

  // Reverse the score for items 4, 5, 7, and 8
  var reverseScore = [4, 5, 7, 8];
  for (var i = 0; i < reverseScore.length; i++) {
    if (reverseScore.includes(i + 1)) {
      score += 4 - parseInt(document.getElementById("q" + (i + 1)).value);
    } else {
      score += parseInt(document.getElementById("q" + (i + 1)).value);
    }
  }

  // Display the score and interpretation
  document.getElementById("score").textContent = score;
  var interpretation = "";
  if (score >= 0 && score <= 13) {
    interpretation = "Low perceived stress.";
  } else if (score >= 14 && score <= 26) {
    interpretation = "Moderate perceived stress.";
  } else if (score >= 27 && score <= 40) {
    interpretation = "High perceived stress.";
  }
  document.getElementById("interpretation").textContent = interpretation;

  // Show the result section
  document.getElementById("result").classList.remove("hidden");
}*/

function calculateScore() {
  var score = 0;

  // Get the answers for each question
  var q1 = parseInt(document.getElementById("q1").value);
  var q2 = parseInt(document.getElementById("q2").value);
  var q3 = parseInt(document.getElementById("q3").value);
  var q4 = parseInt(document.getElementById("q4").value);
  var q5 = parseInt(document.getElementById("q5").value);
  var q6 = parseInt(document.getElementById("q6").value);
  var q7 = parseInt(document.getElementById("q7").value);
  var q8 = parseInt(document.getElementById("q8").value);
  var q9 = parseInt(document.getElementById("q9").value);
  var q10 = parseInt(document.getElementById("q10").value);

  // Reverse the score for items 4, 5, 7, and 8
  var reverseScore = [4, 5, 7, 8];
  for (var i = 0; i < reverseScore.length; i++) {
    if (reverseScore.includes(i + 1)) {
      score += 4 - parseInt(document.getElementById("q" + (i + 1)).value);
    } else {
      score += parseInt(document.getElementById("q" + (i + 1)).value);
    }
  }

  // Get user details
  var name = prompt("Please enter your name:");
  var age = prompt("Please enter your age:");
  var gender = prompt("Please enter your gender:");

  // Store results in JSON format
  var result = {
    name: name,
    age: age,
    gender: gender,
    score: score
  };

  // Display the score and interpretation
  document.getElementById("score").textContent = score;
  var interpretation = "";
  if (score >= 0 && score <= 13) {
    interpretation = "Low perceived stress.";
  } else if (score >= 14 && score <= 26) {
    interpretation = "Moderate perceived stress.";
  } else if (score >= 27 && score <= 40) {
    interpretation = "High perceived stress.";
  }
  document.getElementById("interpretation").textContent = interpretation;

  // Show the result section with a transition
  var resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");
  resultSection.style.backgroundColor = "#eaf7e8";
  setTimeout(function() {
    resultSection.style.backgroundColor = "#fff";
  }, 500);

  // Log the result
  console.log(result);
}

