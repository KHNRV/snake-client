const { argv } = require("./play");

const IP = "10.0.2.15";
const PORT = 50541;
const MOVEMENT = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};
const QUICKCHAT = {
  h: "Hi!",
  b: "Bye!",
  y: "YASSSSS",
  p: "Poop",
  n: "NOP!",
};
const USERNAME = argv
  .join("")
  .split("")
  .filter((value, index) => {
    if (index < 3) {
      return value;
    }
  })
  .join("")
  .toUpperCase();

const SPEED = 250;

module.exports = { IP, PORT, MOVEMENT, QUICKCHAT, USERNAME, SPEED };
