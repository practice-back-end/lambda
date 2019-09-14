const db = require('./dbConfig');

module.exports = {
  addPost,
  getAllPosts,
  getOneRandomPost,
  findById,
  //   removeById
};

function getAllPosts() {
  return db('posts');
}

function findById(id) {
  console.log(id)
  return db('posts')
    .where({ id })
    .first();
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
