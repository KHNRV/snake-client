const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // log to the console the messages the server sends us
  conn.on("data", (data) => {
    console.log("snek-multiplayer says: ", data);
  });

  return conn;
};

module.exports = { connect };
