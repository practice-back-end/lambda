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
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
});

server.post('/api/post', async (req, res) => {
  try {
    const post = req.body;
    const newPost = await db.addPost(post);
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ error });
  }
});

server.delete('/api/post/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.removeById(id);
    res.status(200).json({ message: `Post ${id} successfully deleted` });
  } catch (error) {
    res.status(500).json({ error });
  }
});

server.put('/api/post/:id', async (req, res) => {
  try {
    const post = req.body;
    const id = req.params.id;
    updatedPost = await db.updatePost(id, post);
    res.status(200).json({ updatedPost });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = server;
