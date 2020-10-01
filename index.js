const server = require("./api/server");

const port = process.env.PORT || 4160;
server.listen(port, () => console.log("Server running..."))