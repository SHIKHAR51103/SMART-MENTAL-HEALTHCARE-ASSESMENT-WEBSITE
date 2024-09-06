

 // Define questionnaire data
 const questionnaire = [
  {
      question: 'Sadness: Do you feel sad or empty?',
      options: [
          'I do not feel sad.',
          'I feel sad.',
          'I am sad all the time and I can\'t snap out of it.',
          'I am so sad and unhappy that I can\'t stand it.'
      ]
  },
  {
      question: 'Pessimism: Do you feel discouraged or pessimistic about the future?',
      options: [
          'I am not particularly discouraged about the future.',
          'I feel discouraged about the future.',
          'I feel I have nothing to look forward to.',
          'I feel the future is hopeless and that things cannot improve.'
      ]
  },
  {
      question: 'Past failure: Do you feel like you have failed in the past?',
      options: [
          'I do not feel like a failure.',
          'I feel I have failed more than the average person.',
          'As I look back on my life, all I can see is a lot of failures.',
          'I feel I am a complete failure as a person.'
      ]
  },
  {
    question: 'Loss of pleasure: Do you still enjoy the things you used to?',
    options: [
      'I get as much satisfaction out of things as I used to.',
      'I don\'t enjoy things the way I used to.',
      'I don\'t get real satisfaction out of anything anymore.',
      'I am dissatisfied or bored with everything.'
    ]
  },
  {
    question: 'Guilt: Do you feel guilty about anything?',
    options: [
      'I don\'t feel particularly guilty.',
      'I feel guilty a good part of the time.',
      'I feel quite guilty most of the time.',
      'I feel guilty all of the time.'
    ]
  },
  {
    question: 'Punishment: Do you feel like you are being punished?',
    options: [
      'I don\'t feel I am being punished.',
      'I feel I may be punished.',
      'I expect to be punished.',
      'I feel I am being punished.'
    ]
  },
  {
    question: 'Self-dislike: Do you feel disappointed or disgusted with yourself?',
    options: [
      'I don\'t feel disappointed in myself.',
      'I am disappointed in myself.',
      'I am disgusted with myself.',
      'I hate myself.'
    ]
  },
  {
    question: 'Self-criticalness: How critical are you of yourself?',
    options: [
      'I don\'t feel I am any worse than anybody else.',
      'I am critical of myself for my weaknesses or mistakes.',
      'I blame myself all the time for my faults.',
      'I blame myself for everything bad that happens.'
    ]
  },
  {
    question: 'Suicidal thoughts or wishes: Have you thought about suicide?',
    options: [
      'I don\'t have any thoughts of killing myself.',
      'I have thoughts of killing myself, but I would not carry them out.',
      'I would like to kill myself.',
      'I would kill myself if I had the chance.'
    ]
  },
  {
    question: 'Crying: Do you cry more or less than usual?',
    options: [
      'I don\'t cry any more than usual.',
      'I cry more now than I used to.',
      'I cry all the time now.',
      'I used to be able to cry, but now I can\'t cry even though I want to.'
    ]
  },
  {
    question: 'Agitation: Do you feel more or less irritable than usual?',
    options: [
      'I am no more irritated by things than I ever was.',
      'I am slightly more irritated now than usual.',
      'I am quite annoyed or irritated a good deal of the time.',
      'I feel irritated all the time.'
    ]
  },
  {
    question: 'Loss of interest: Have you lost interest in activities that you used to enjoy?',
    options: [
      'I have not lost interest in other people.',
      'I am less interested in other people than I used to be.',
      'I have lost most of my interest in other people and activities.',
      'It\'s hard to be interested in anything.'
    ]
  },
  {
    question: 'Indecisiveness: Do you have trouble making decisions?',
    options: [
      'I make decisions about as well as I ever did.',
      'I avoid making decisions more than I used to.',
      'I have much greater difficulty in making decisions than I used to.',
      'I can\'t make decisions at all anymore.'
    ]
  },
  {
    question: 'Worthlessness: Do you feel worthless or like a failure?',
    options: [
      'I don\'t feel that I am worthless.',
      'I feel more worthless than usual.',
      'I feel worthless all the time.',
      'I feel utterly worthless.'
    ]
  },
  {
    question: 'Loss of energy: Do you feel tired or have little energy?',
    options: [
      'I have as much energy as ever.',
      'I have less energy than I used to.',
      'I don\'t have enough energy to do very much.',
      'I don\'t have enough energy to do anything.'
    ]
  },
  {
    question: 'Changes in sleep patterns: Have your sleep patterns changed?',
    options: [
      'I have not experienced any change in my sleeping patterns.',
      'I sleep somewhat more than usual.',
      'I sleep somewhat less than usual.',
      'I sleep a lot more than usual or I sleep a lot less than usual.'
    ]
  },
  {
    question: 'Irritability: Are you more easily irritated or angered than usual?',
    options: [
      'I am no more easily irritated than usual.',
      'I am slightly more easily irritated now than usual.',
      'I am much more easily irritated now than usual.',
      'I am irritated all the time.'
    ]
  },
  {
    question: 'Changes in appetite: Have you experienced any changes in your appetite?',
    options: [
      'I have not experienced any change in my appetite.',
      'My appetite is somewhat less than usual.',
      'My appetite is somewhat greater than usual.',
      'My appetite is much less than before or much greater than before.'
    ]
  },
  {
    question: 'Concentration difficulty: Do you have difficulty concentrating?',
    options: [
      'I can concentrate as well as ever.',
      'I can\'t concentrate as well as usual.',
      'It\'s hard to keep my mind on anything for very long.',
      'I find I can\'t concentrate on anything.'
    ]
  },
  {
    question: 'Tiredness or fatigue: Do you feel more tired or fatigued than usual?',
    options: [
      'I am no more tired or fatigued than usual.',
      'I get more tired or fatigued than usual.',
      'I get tired or fatigued from doing anything.',
      'I am too tired or fatigued to do anything.'
    ]
  },
  {
    question: 'Loss of interest in sex: Have you lost interest in sex?',
    options: [
      'I have not experienced any loss of interest in sex.',
      'I am less interested in sex than I used to be.',
      'I have much less interest in sex now.',
      'I have lost all interest in sex.'
    ]
  }

  // Add more questions as needed...
];

let currentQuestion = 0;  // Tracks current question index
let score = 0;            // Tracks total score

// Start the test when the user clicks the "Start Test" button
document.getElementById('startTest').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  // Validate input
  if (!name || !age || !gender) {
      alert('Please fill out all fields.');
      return;
  }

  // Store initial form data in hidden fields
  document.getElementById('hiddenName').value = name;
  document.getElementById('hiddenAge').value = age;
  document.getElementById('hiddenGender').value = gender;

  // Show test container and hide intro container
  document.querySelector('.intro-container').style.display = 'none';
  document.getElementById('testContainer').style.display = 'block';

  // Show the first question
  showQuestion();
});

// Event listener for the "Next" button
document.getElementById('nextQuestion').addEventListener('click', () => {
  // Get the selected answer
  const selectedOption = document.querySelector('input[name="question' + currentQuestion + '"]:checked');
  if (selectedOption) {
      // Increment the score
      score += parseInt(selectedOption.value);

      // Move to the next question or submit the form if it's the last question
      currentQuestion++;
      if (currentQuestion < questionnaire.length) {
          showQuestion();
      } else {
          // Hide the next button and show the submit button
          document.getElementById('nextQuestion').style.display = 'none';
          document.getElementById('submitTest').style.display = 'block';
      }
  } else {
      alert("Please select an option to proceed.");
  }
});

// Function to display the current question
function showQuestion() {
  const questionObj = questionnaire[currentQuestion];
  const questionHTML = `
      <div class="question">
          <h2>${questionObj.question}</h2>
          ${questionObj.options.map((option, index) => `
              <label class="option">
                  <input type="radio" name="question${currentQuestion}" value="${index}">
                  ${option}
              </label>
          `).join('')}
      </div>
  `;
  document.getElementById('questionContainer').innerHTML = questionHTML;
}
