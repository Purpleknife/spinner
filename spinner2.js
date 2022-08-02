//Refactor the code from spinner1.js and make DRY.
const spinner = '|/-\\|/-\\|';
let i = 0;

const animate = function() {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[i++]); //Increment each time by 1.

    if (i < spinner.length) { //Keep calling animate() as long as the condition is true.
      animate();
    }
    if (i === spinner.length) { //When it reaches the last element, go back to a new line.
      process.stdout.write('\n');
    }
  }, 100);
};
animate();