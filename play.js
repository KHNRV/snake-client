const { connect } = require("./client");

console.log("Connecting ...");
connect();

// const handleUserInput = (key, data) => {
//   if (data.ctrl && data.name === "c") {
//     // at which point the program should say "Thanks for using me, ciao!"
//     console.log("Thanks for using me, ciao!");
//     // before terminating
//     process.exit();
//   }
// };

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  // Allows to read the CLI
  const readline = require("readline");

  // Allows to read the user key strokes
  readline.emitKeypressEvents(process.stdin);

  // Allow to read every key press individually
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // stdin.resume();
  stdin.on("keypress", (key, data) => {
    if (data.ctrl && data.name === "c") {
      // at which point the program should say "Thanks for using me, ciao!"
      console.log("Thanks for using me, ciao!");
      // before terminating
      process.exit();
    }
  });
  return stdin;
};

setupInput();
