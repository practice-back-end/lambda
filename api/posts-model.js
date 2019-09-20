const db = require('../data/dbConfig');

module.exports = {
  addPost,
  getAllPosts,
  getOneRandomPost,
  findById,
  removeById,
  updatePost
};

function getAllPosts() {
  return db('posts');
}

function findById(id) {
  console.log(id);
  return db('posts')
    .where({ id })
    .first();
}

function removeById(id) {
  return db('posts')
    .where({ id })
    .del();
}

async function updatePost(id, post) {
  await db('posts')
    .where({ id })
    .update(post);
  return findById(id);
}

async function addPost(post) {
  const [id] = await db('posts').insert(post, 'id');
  return findById(id);
}

async function getOneRandomPost() {
  const allPosts = await getAllPosts();
  const result = Math.floor(Math.random() * allPosts.length);
  return allPosts[result];
}
