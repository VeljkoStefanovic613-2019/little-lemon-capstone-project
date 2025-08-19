import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!name || !email || !password) {
    setError("All fields are required");
    return;
  }

  try {
    await register(name, email, password);
    navigate("/login");
  } catch (err) {
    setError(err.message || "Registration failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border w-full p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border w-full p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300 w-full">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
