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
    console.log("Game server says: ", data);
  });

  // log message when client has successfully connected to game server
  conn.on("connect", () =>
    console.log("Successfully connected to game server")
  );

  // send player name to server
  conn.write("Name: KHN");
  return conn;
};

module.exports = { connect };
