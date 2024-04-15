const fs = require("fs")
const path = require("path")
const db = JSON.parse(fs.readFileSync(path.join("db.json")))
require('dotenv').config();
const cors = require('cors')
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(cors());
server.use(router);
server.listen(PORT, () => {
	console.log(`JSON Server is running on PORT ${PORT}`);
});
