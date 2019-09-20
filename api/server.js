const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require("../api/auth-router");
const usersRouter = require("../api/users-router");
const postsRouter = require("../api/posts-router")

const server = express();

server.use(helmet());
server.use(cors({ origin: '*' }))
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/post", postsRouter)

server.get('/', (req, res) => {
  res.send(`Server Running`);
});



module.exports = server;
