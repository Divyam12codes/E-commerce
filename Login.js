import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-3 p-6 border rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <input type="email" placeholder="Email" className="p-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="p-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-black text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
