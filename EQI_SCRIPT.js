/*document.getElementById('eqForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Calculate scores for each section
  const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];
  const scores = {};

  sections.forEach(function(section) {
    const questions = document.getElementsByName(section + '1');
    let sectionScore = 0;

    for (let i = 0; i < questions.length; i++) {
      sectionScore += parseInt(questions[i].value);
    }

    scores[section] = sectionScore / questions.length;
  });

  // Display results
  const resultContainer = document.createElement('div');
  resultContainer.innerHTML = '<h2>Results</h2>';

  sections.forEach(function(section) {
    const sectionScore = scores[section];
    let resultText = '';

    if (sectionScore >= 3) {
      resultText = 'Good indicator of emotional intelligence';
    } else if (sectionScore >= 2) {
      resultText = 'Area where improvement is needed';
    }

    const sectionResult = document.createElement('p');
    sectionResult.innerHTML = `<strong>${section}:</strong> ${sectionScore.toFixed(2)} - ${resultText}`;
    resultContainer.appendChild(sectionResult);
  });

  document.body.appendChild(resultContainer);
});*/


/*document.addEventListener('DOMContentLoaded', function() {
  // Prompt for user information
  const name = prompt('Please enter your name:');
  const age = prompt('Please enter your age:');
  const gender = prompt('Please enter your gender:');

  // Calculate and display emotional intelligence scores
  document.getElementById('eqForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Calculate scores for each section
    const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];
    const scores = {};

    sections.forEach(function(section) {
      const questions = document.getElementsByName(section + '1');
      let sectionScore = 0;

      for (let i = 0; i < questions.length; i++) {
        sectionScore += parseInt(questions[i].value);
      }

      scores[section] = sectionScore / questions.length;
    });

    // Create JSON object with user information and scores
    const userData = {
      name: name,
      age: age,
      gender: gender,
      scores: scores
    };

    // Display results
    const resultContainer = document.createElement('div');
    resultContainer.innerHTML = '<h2>Results</h2>';
    resultContainer.innerHTML += `<p><strong>Name:</strong> ${userData.name}</p>`;
    resultContainer.innerHTML += `<p><strong>Age:</strong> ${userData.age}</p>`;
    resultContainer.innerHTML += `<p><strong>Gender:</strong> ${userData.gender}</p>`;

    sections.forEach(function(section) {
      const sectionScore = scores[section];
      let resultText = '';

      if (sectionScore >= 3) {
        resultText = 'Good indicator of emotional intelligence';
      } else if (sectionScore >= 2) {
        resultText = 'Area where improvement is needed';
      }

      resultContainer.innerHTML += `<p><strong>${section}:</strong> ${sectionScore.toFixed(2)} - ${resultText}</p>`;
    });

    document.body.appendChild(resultContainer);
  });
});*/

/*document.addEventListener('DOMContentLoaded', function() {
  const userData = {}; // Object to store user data

  // Prompt user for name, age, and gender
  userData.name = prompt("Enter your name:");
  userData.age = prompt("Enter your age:");
  userData.gender = prompt("Enter your gender:");

  // Add event listener to form submission
  document.getElementById('eqForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Calculate scores for each section
    const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];
    const scores = {};

    sections.forEach(function(section) {
      const questions = document.getElementsByName(section + '1');
      let sectionScore = 0;

      for (let i = 0; i < questions.length; i++) {
        sectionScore += parseInt(questions[i].value);
      }

      scores[section] = sectionScore / questions.length;
    });

    // Store scores in user data
    userData.scores = scores;

    // Display results
    const resultContainer = document.createElement('div');
    resultContainer.innerHTML = '<h2>Results</h2>';

    sections.forEach(function(section) {
      const sectionScore = scores[section];
      let resultText = '';

      if (sectionScore >= 3) {
        resultText = 'Good indicator of emotional intelligence';
      } else if (sectionScore >= 2) {
        resultText = 'Area where improvement is needed';
      }

      const sectionResult = document.createElement('p');
      sectionResult.innerHTML = `<strong>${section}:</strong> ${sectionScore.toFixed(2)} - ${resultText}`;
      resultContainer.appendChild(sectionResult);
    });

    // Display user data
    const userDataContainer = document.createElement('div');
    userDataContainer.innerHTML = '<h2>User Data</h2>';
    userDataContainer.innerHTML += `<p><strong>Name:</strong> ${userData.name}</p>`;
    userDataContainer.innerHTML += `<p><strong>Age:</strong> ${userData.age}</p>`;
    userDataContainer.innerHTML += `<p><strong>Gender:</strong> ${userData.gender}</p>`;

    document.body.appendChild(resultContainer);
    document.body.appendChild(userDataContainer);
  });
});*/
/*document.addEventListener('DOMContentLoaded', function() {
  // Function to calculate emotional intelligence scores
  function calculateScores() {
      const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];
      const scores = {};

      sections.forEach(function(section) {
          const questions = document.getElementsByName(section + '1');
          let sectionScore = 0;

          for (let i = 0; i < questions.length; i++) {
              sectionScore += parseInt(questions[i].value);
          }

          scores[section] = sectionScore / questions.length;
      });

      return scores;
  }

  // Function to display results
  function displayResults(userData) {
      const resultContainer = document.createElement('div');
      resultContainer.innerHTML = '<h2>Results</h2>';
      resultContainer.innerHTML += `<p><strong>Name:</strong> ${userData.name}</p>`;
      resultContainer.innerHTML += `<p><strong>Age:</strong> ${userData.age}</p>`;
      resultContainer.innerHTML += `<p><strong>Gender:</strong> ${userData.gender}</p>`;

      const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];

      sections.forEach(function(section) {
          const sectionScore = userData.scores[section];
          let resultText = '';

          if (sectionScore >= 3) {
              resultText = 'Good indicator of emotional intelligence';
          } else if (sectionScore >= 2) {
              resultText = 'Area where improvement is needed';
          }

          resultContainer.innerHTML += `<p><strong>${section}:</strong> ${sectionScore.toFixed(2)} - ${resultText}</p>`;
      });

      document.body.appendChild(resultContainer);
  }

  // Event listener for form submission
  document.getElementById('eqForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Prompt for user information
      const name = prompt('Please enter your name:');
      const age = prompt('Please enter your age:');
      const gender = prompt('Please enter your gender:');

      // Calculate scores
      const scores = calculateScores();

      // Create user data object
      const userData = {
          name: name,
          age: age,
          gender: gender,
          scores: scores
      };

      // Display results
      displayResults(userData);

      // Store user data in localStorage
      let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
      usersData.push(userData);
      localStorage.setItem('usersData', JSON.stringify(usersData));
  });
});*/










/*YEH PURANA WALA CODE HAI document.addEventListener('DOMContentLoaded', function() {
  const introForm = document.getElementById('introForm');
  const testContainer = document.getElementById('testContainer');
  const startTestBtn = document.getElementById('startTest');

  startTestBtn.addEventListener('click', function() {
    const name = introForm.name.value;
    const age = introForm.age.value;
    const gender = introForm.gender.value;

    if (name && age && gender) {
      document.querySelector('.intro-container').style.display = 'none';
      testContainer.style.display = 'block';
      setTimeout(() => {
        testContainer.style.opacity = '1';
      }, 100);
    } else {
      alert('Please fill in all fields.');
    }
  });

  // Function to calculate emotional intelligence scores
  function calculateScores() {
    const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];
    const scores = {};

    sections.forEach(function(section) {
      const questions = document.getElementsByName(section + '1');
      let sectionScore = 0;

      for (let i = 0; i < questions.length; i++) {
        sectionScore += parseInt(questions[i].value);
      }

      scores[section] = sectionScore / questions.length;
    });

    return scores;
  }

  // Function to display results
  function displayResults(userData) {
    const resultContainer = document.createElement('div');
    resultContainer.innerHTML = '<h2>Results</h2>';
    resultContainer.innerHTML += `<p><strong>Name:</strong> ${userData.name}</p>`;
    resultContainer.innerHTML += `<p><strong>Age:</strong> ${userData.age}</p>`;
    resultContainer.innerHTML += `<p><strong>Gender:</strong> ${userData.gender}</p>`;

    const sections = ['selfAwareness', 'selfManagement', 'socialAwareness', 'relationshipManagement'];

    sections.forEach(function(section) {
      const sectionScore = userData.scores[section];
      let resultText = '';

      if (sectionScore >= 3) {
        resultText = 'Good indicator of emotional intelligence';
      } else if (sectionScore >= 2) {
        resultText = 'Area where improvement is needed';
      }

      resultContainer.innerHTML += `<p><strong>${section}:</strong> ${sectionScore.toFixed(2)} - ${resultText}</p>`;
    });

    document.body.appendChild(resultContainer);
  }

  // Event listener for form submission
  document.getElementById('eqForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Calculate scores
    const scores = calculateScores();

    // Create user data object
    const userData = {
      name: introForm.name.value,
      age: introForm.age.value,
      gender: introForm.gender.value,
      scores: scores
    };

    // Display results
    displayResults(userData);

    // Store user data in localStorage
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    usersData.push(userData);
    localStorage.setItem('usersData', JSON.stringify(usersData));
  });
});
*/
document.getElementById('startTest').addEventListener('click', function() {
  // Transfer data from introForm to eqForm
  document.getElementById('hiddenName').value = document.getElementById('name').value;
  document.getElementById('hiddenAge').value = document.getElementById('age').value;
  document.getElementById('hiddenGender').value = document.getElementById('gender').value;

  document.querySelector('.intro-container').style.display = 'none';
  document.getElementById('testContainer').style.display = 'block';
});

