cat > backend/src/app.js <<'EOF'
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Facepage API is running"));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
EOF