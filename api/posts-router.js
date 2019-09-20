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

router.delete('/:id', protected, verifyPostId, verifyEditable, async (req, res) => {
    try {
        const id = req.params.id;
        await db.removeById(id);
        res.status(200).json({ message: `Post ${id} successfully deleted` });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put('/:id', protected, verifyPostId, verifyEditable, async (req, res) => {
    try {
        const post = req.body;
        const id = req.params.id;
        updatedPost = await db.updatePost(id, post);
        res.status(200).json({ updatedPost });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// ---------------------- Custom Middleware ---------------------- //

function verifyEditable(req, res, next) {
    const id = req.params.id;

    db.findById(id)
        .then(quote => {
            if (quote.id > 22) {
                next();
            } else {
                res.status(403).json({ message: "You are not authorized to edit/delete this post." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

function verifyPostId(req, res, next) {
    const id = req.params.id;

    db.findById(id)
        .then(item => {
            console.log("item", item)
            if (item) {
                req.item = item;
                next();
            } else {
                res.status(404).json({ message: "Post Not Found." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;