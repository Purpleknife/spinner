//Refactor the code from spinner1.js and make DRY.
const spinner = '|/-\\|/-\\|';
let count = 0;

const animate = function() {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[count++]); //Increment each time by 1.

    if (count < spinner.length) { //Keep calling animate() as long as the condition is true.
      animate();
    }
    if (count === spinner.length) { //When it reaches the last element, go back to a new line.
      process.stdout.write('\n');
    }
  }, 100);
};
animate();