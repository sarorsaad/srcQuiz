// Get all elements with class name 'modal-button' and convert to array
const modalBtns = [...document.getElementsByClassName('modal-button')];

// Get element with ID 'modal-body-confirm'
const modalBody = document.getElementById('modal-body-confirm');
// Get the element with ID 'start-button'
const startBtn = document.getElementById('start-button');

// Get the URL of the current webpage
const url = window.location.href;



// Add click event listener to each modal button
modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
  // Get attributes from clicked modal button
  const pk = modalBtn.getAttribute('data-pk');
  const name = modalBtn.getAttribute('data-quiz');
  const numQuestions = modalBtn.getAttribute('data-questions');
  const difficulty = modalBtn.getAttribute('data-difficulty');
  const scoreToPass = modalBtn.getAttribute('data-pass');
  const time = modalBtn.getAttribute('data-time');

// Set HTML content of modal body
modalBody.innerHTML = `
  <div class="h5 mb-3">Are you sure you want to begin "<b>${name}</b>"?</div>
  <div class="text-muted">
    <ul>
      <li>Difficulty: <b>${difficulty}</b></li>
      <li>Number of Questions: <b>${numQuestions}</b></li>
      <li>Score to Pass: <b>${scoreToPass}</b></li>
      <li>Time: <b>${time} min</b></li>
    </ul>
  </div>
`;

// Add a click event listener to the startBtn element
startBtn.addEventListener('click', () => {
    // When the button is clicked, redirect the user to the current URL with an added query parameter 'pk'
    window.location.href = url  + pk;
  });
  

}));
 