const express = require("express");
const PORT = 4000;

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", require("../routes/routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on ! PORT ${this.port}`);
    });
  }
}

module.exports = Server;