const server = require("./api/server");

// dynamic port
const port = process.env.PORT || 4160;
server.listen(port, () => console.log("Server running..."))