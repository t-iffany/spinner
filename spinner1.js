// Create a low-fidelity loading spinner

// special character \r  returns cursor back to beg of line
// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// use \r to take an animation by replacing/rewriting characters in the same spot after a day

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 1700);

// output a newline character before exiting, so next prompt starts on its own line
setTimeout(() => {
  process.stdout.write('\n');
}, 1900);