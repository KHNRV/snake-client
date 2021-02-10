// Get CLI arguments and export immediately
const argv = process.argv.slice(2);
module.exports = { argv };

// Require
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

setupInput(connection);
