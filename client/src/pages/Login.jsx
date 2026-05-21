import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      alert("Login Successful");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    // 1. The Wrapper: A deep, overcast stormy sky gradient
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-800 via-slate-900 to-slate-950 p-4">
      {/* 2. The Form Card: Frosted glass effect (backdrop-blur) like a wet window */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 shadow-2xl flex flex-col gap-6 w-full max-w-100"
      >
        {/* Header section */}
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Inputs section */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email address"
            onChange={handleChange}
            // Deep, dark input fields with a watery cyan glow on focus
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all duration-300"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all duration-300"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          // Muted cyan tone mimicking water, with a subtle glow
          className="w-full py-3 px-4 bg-cyan-700 hover:bg-cyan-600 text-slate-100 font-medium rounded-xl transition-colors duration-300 shadow-[0_0_15px_rgba(8,145,178,0.2)] mt-2"
        >
          Login
        </button>

        {/* Footer link */}
        <p className="text-center text-sm text-slate-400 mt-2">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Create your account Here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
