window.addEventListener('DOMContentLoaded', () => {
    // Retrieve the existing results from localStorage
    const results = JSON.parse(localStorage.getItem('results')) || [];
  
    // Display the results in the table
    const tableBody = document.querySelector('#resultsTable tbody');
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.score}</td>
      `;
      tableBody.appendChild(row);
    });
  });
  
  // Retrieve the user's name and score from sessionStorage
  const name = sessionStorage.getItem('name');
  const score = sessionStorage.getItem('score');
  
  // Store the user's name and score in the results array
  const result = { name, score };
  const results = JSON.parse(localStorage.getItem('results')) || [];
  results.push(result);
  localStorage.setItem('results', JSON.stringify(results));
  