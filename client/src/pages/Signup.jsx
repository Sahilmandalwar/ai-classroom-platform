import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {signUpUser} from "../services/authServices";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signUpUser(formData);
      localStorage.setItem("token", res.token);
      alert("Signup Successful");
      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong during signup.",
      );
    }
  };

  return (
    // 1. Deep Space Canvas: Pitch black background with hidden overflow for the glowing orbs
    <div className="relative min-h-screen flex items-center justify-center bg-[#05050A] overflow-hidden p-4">
      {/* 2. Supernova Background Effects: Creating massive, blurry glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-150 h-75 sm:h-150 bg-fuchsia-600/30 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-100 h-100 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-800/20 rounded-full blur-[150px] pointer-events-none"></div>

      {/* 3. The Form Card: Translucent dark glass floating over the supernova */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] flex flex-col gap-6 w-full max-w-100"
      >
        <div className="text-center mb-2">
          {/* Cosmic Text Gradient */}
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500 mb-2">
            Signup Page
          </h1>
          <p className="text-sm text-purple-200/60">Register yourself here</p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            // Dark void inputs with a neon pink/purple focus glow
            className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/20 text-purple-50 placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all duration-300 tracking-wide"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/20 text-purple-50 placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all duration-300 tracking-wide"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/20 text-purple-50 placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all duration-300 tracking-wide"
            required
          />
        </div>

        {/* 4. Supernova Button: Vibrant gradient with an explosive glow */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600 hover:from-indigo-500 hover:via-purple-500 hover:to-fuchsia-500 text-white font-bold tracking-wider uppercase rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.7)] mt-2"
        >
          Signup
        </button>

        {/* Footer link */}
        <p className="text-center text-sm text-purple-200/60 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
