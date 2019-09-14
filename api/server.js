const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../data/posts-model');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`Server Running`);
});

server.get('/api/getem', async (req, res) => {
  try {
    const posts = await db.getAllPosts();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
});

server.get('/api/getone', async (req, res) => {
  try {
    const post = await db.getOneRandomPost();
    res.status(200).json({ post })
  } catch (error) {
    res.status(500).json({ error });
  }
})

server.post('/api/post', async (req, res) => {
  try {
    let post = req.body;
    const newPost = await db.addPost(post);
    res.status(201).json({ newPost })
  } catch (error) {
    res.status(500).json({ error });
  }
})

module.exports = server;
