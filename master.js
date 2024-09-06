// Function to store the name and score in a CSV file
function storeUserData(name, score) {
    // Create a CSV string with the user data
    const csv = `${name},${score}\n`;
  
    // Create a Blob object for the CSV data
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  
    // Generate the file name (e.g., "dataset.csv")
    const fileName = 'dataset.csv';
  
    // Check if the browser supports the 'download' attribute
    if (navigator.msSaveBlob) {
      // For IE/Edge
      navigator.msSaveBlob(blob, fileName);
    } else {
      // Check if the file already exists
      checkFileExists(fileName)
        .then((fileExists) => {
          if (fileExists) {
            // Read the existing file content
            readExistingFileContent(fileName)
              .then((existingContent) => {
                // Combine the existing content and new user data
                const updatedContent = existingContent + csv;
  
                // Create a new Blob object with the updated content
                const updatedBlob = new Blob([updatedContent], { type: 'text/csv;charset=utf-8;' });
  
                // Create a temporary link element
                const link = document.createElement('a');
                if (link.download !== undefined) {
                  // Set the link's attributes
                  link.setAttribute('href', URL.createObjectURL(updatedBlob));
                  link.setAttribute('download', fileName);
  
                  // Append the link to the document body
                  document.body.appendChild(link);
  
                  // Trigger the click event on the link
                  link.click();
  
                  // Clean up resources
                  document.body.removeChild(link);
                }
              })
              .catch((error) => {
                console.error('Error reading existing file content:', error);
              });
          } else {
            // If the file doesn't exist, create a new one
            if (link.download !== undefined) {
              // Set the link's attributes
              link.setAttribute('href', URL.createObjectURL(blob));
              link.setAttribute('download', fileName);
  
              // Append the link to the document body
              document.body.appendChild(link);
  
              // Trigger the click event on the link
              link.click();
  
              // Clean up resources
              document.body.removeChild(link);
            }
          }
        })
        .catch((error) => {
          console.error('Error checking file existence:', error);
        });
    }
  }
  
  // Function to check if the file already exists
  function checkFileExists(fileName) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', fileName, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.status === 200);
        }
      };
      xhr.send();
    });
  }
  
  // Function to read the existing file content
  function readExistingFileContent(fileName) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileName, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.send();
    });
  }
  
  // Example usage
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', () => {
    const userName = null; // Set the user name here
    const userScore = 50; // Set the user score here
    storeUserData(userName, userScore);
  });
  