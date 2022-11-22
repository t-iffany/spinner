// Refactor spinner1.js logic to remove the repeated setTimeout statements

const symbols = "|/-\\|/-\\|";
let delay = 0;

for (const char of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);        // use backticks
  }, delay);
  delay += 200;
}

// output a newline character before exiting, so next prompt starts on its own line
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
