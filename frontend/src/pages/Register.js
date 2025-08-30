
cat > frontend/src/pages/Register.js <<'EOF'
import React, { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      alert("User registered! Now login.");
    } catch (e) {
      alert(e.response?.data?.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
EOF