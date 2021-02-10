// Stores the active TCP connection object.
let connection;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    // at which point the program should say "Thanks for using me, ciao!"
    console.log("Thanks for using me, ciao!");
    // before terminating
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
    // console.log("up");
  } else if (key === "s") {
    connection.write("Move: down");
    // console.log("down");
  } else if (key === "a") {
    connection.write("Move: left");
    // console.log("left");
  } else if (key === "d") {
    connection.write("Move: right");
    // console.log("right");
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
