"use strict";

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 3000;
const io = require("socket.io")(server);
const path = require("path");
const colors = require("colors");

app.use(express.static(path.join(__dirname + "/src")));

let users = 0;

io.on("connection", (socket) => {
	users++;
	console.log(`Number of users: ${users}`.green);

	socket.on("disconnect", () => {
		users--;
		console.log(`Number of users: ${users}`.red);
	});
});

server.listen(PORT, () => console.log(`Running on port: ${PORT}`.yellow));