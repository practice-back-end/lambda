const router = require("express").Router();

const db = require("./posts-model")
const protected = require("../middleware/restricted-middleware")

router.get('/', protected, async (req, res) => {
    try {
        const posts = await db.getAllPosts();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/getone', protected, async (req, res) => {
    try {
        const post = await db.getOneRandomPost();
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/', protected, async (req, res) => {
    try {
        const post = req.body;
        const newPost = await db.addPost(post);
        res.status(201).json({ newPost });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.delete('/:id', protected, async (req, res) => {
    try {
        const id = req.params.id;
        await db.removeById(id);
        res.status(200).json({ message: `Post ${id} successfully deleted` });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put('/:id', protected, async (req, res) => {
    try {
        const post = req.body;
        const id = req.params.id;
        updatedPost = await db.updatePost(id, post);
        res.status(200).json({ updatedPost });
    } catch (error) {
        res.status(500).json({ error });
    }
});


module.exports = router;