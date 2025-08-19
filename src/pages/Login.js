import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const { login, isLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (isLoggedIn) navigate("/", { replace: true });
  }, [isLoggedIn, navigate]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setErr("");

  if (!email || !password) {
    setErr("Please fill in all fields");
    return;
  }

  try {
    setLoading(true);
    await login(email, password);
    navigate("/", { replace: true });
  } catch (error) {
    setErr(error.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-100 p-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-black">
            Welcome Back
          </h2>
        </div>

        {err && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {err}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                autoComplete="email"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-medium text-primary hover:text-yellow-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
