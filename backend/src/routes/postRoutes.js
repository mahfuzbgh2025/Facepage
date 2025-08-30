cat > backend/src/routes/postRoutes.js <<'EOF'
const router = require("express").Router();
const { createPost, getPosts } = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createPost);
router.get("/", getPosts);

module.exports = router;
EOF