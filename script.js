
const yesButton = document.getElementById('yes');
const noButton = document.getElementById("no");

let moveCounter = 0;

noButton.addEventListener("mouseover", function() {
  moveCounter++;

  if (moveCounter <= 10) {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
  }

  if (moveCounter === 10) {
    this.removeEventListener("mouseover", arguments.callee);
  }
});

yesButton.addEventListener('click', () => {
	alert('Amazing, I look forward to hearing from you');
});

noButton.addEventListener('click', () => {
	alert('Sorry, please consider me in the future');
});
