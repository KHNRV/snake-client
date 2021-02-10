const { MOVEMENT, QUICKCHAT, SPEED } = require("./constants");
// Stores the active TCP connection object.
let connection;

// Track the actual movement in progress
let actualMovID = 0;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    // at which point the program should say "Thanks for using me, ciao!"
    console.log("Thanks for using me, ciao!");
    // before terminating
    process.exit();
  } else if (Object.keys(MOVEMENT).includes(key)) {
    // Stop the last ongoing movement
    if (actualMovID !== 0) {
      clearInterval(actualMovID);
    }
    // Start a movement and save its ID to be able to stop it later
    actualMovID = setInterval(() => {
      connection.write(`Move: ${key}`);
    }, SPEED);
  } else if (Object.keys(QUICKCHAT).includes(key)) {
    connection.write(`Say: ${QUICKCHAT[key]}`);
  }
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  // Allows to read the CLI
  const readline = require("readline");

  // Allows to read the user key strokes
  readline.emitKeypressEvents(process.stdin);

  // Allow to read every key press individually
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

module.exports = { setupInput };
