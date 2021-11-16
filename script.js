// ***** 1st approach with display: block / none *****
// var acc = document.getElementsByClassName('accordion');
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle('active');

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

// ***** 2nd approach with max-height: 0 / x pixels *****
// var acc = document.getElementsByClassName('accordion');
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// }

// ***** 3rd approach refactoring the 2nd *****
const questions = document.querySelectorAll('.accordion');

for (let question of questions) {
  question.addEventListener('click', function () {
    this.classList.toggle('active');
    const answer = this.nextElementSibling;

    if (!answer.style.maxHeight) {
      // scrollHeight is the min height of the element so that the content fits inside without the need of a sidebar. THIS IS THAT MAKES THE SMOOTH OPEN/CLOSE
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = null;
    }
  });
}
