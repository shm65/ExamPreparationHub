document.addEventListener("DOMContentLoaded", function () {
  // Get the exam type and class from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const exam = urlParams.get('exam');
  const studentClass = urlParams.get('class');

  // Define subjects based on exam type
  const subjects = {
    IIT: ['Math', 'Physics', 'Chemistry'],
    NEET: ['Biology', 'Physics', 'Chemistry'],
    NTSE: ['Math', 'Social Science'],
    Olympiad: ['Math', 'Science', 'English', 'Social Science']
  };

  // Display subjects as cards
  const subjectContainer = document.getElementById('subject-container');
  if (!exam || !studentClass) {
    alert("Invalid selection. Please go back and select your exam and class.");
    return;
  }

  if (subjectContainer && subjects[exam]) {
    subjects[exam].forEach(subject => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h2>${subject}</h2>`;
      card.onclick = () => {
        location.href = `notes.html?exam=${exam}&class=${studentClass}&subject=${subject}`;
      };
      subjectContainer.appendChild(card);
    });
  } else {
    console.error("Element with ID 'subject-container' not found or invalid exam type.");
  }
});
