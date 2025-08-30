cat > frontend/src/pages/Home.js <<'EOF'
import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const load = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", { content });
      setContent("");
      await load();
    } catch (e) {
      alert(e.response?.data?.error || "Post failed");
    }
  };

  return (
    <div>
      <h2>Newsfeed</h2>
      <form onSubmit={handlePost} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's on your mind?"
          style={{ flex: 1 }}
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map(p => (
          <li key={p._id} style={{ marginBottom: 8, padding: 8, border: "1px solid #ddd" }}>
            <strong>{p.userId?.username || "Unknown"}:</strong> {p.content}
            <div style={{ fontSize: 12, color: "#666" }}>{new Date(p.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
EOF