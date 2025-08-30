cat > backend/src/controllers/postController.js <<'EOF'
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { content, image } = req.body;
    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: "Content is required" });
    }
    const post = await Post.create({
      userId: req.user.id,
      content,
      image: image || ""
    });
    const populated = await post.populate("userId", "username");
    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("userId", "username");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
EOF