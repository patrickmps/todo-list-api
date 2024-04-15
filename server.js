require('dotenv').config();
const cors = require('cors')
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(cors());
server.use(router);
server.listen(PORT, () => {
	console.log(`JSON Server is running on PORT ${PORT}`);
});
