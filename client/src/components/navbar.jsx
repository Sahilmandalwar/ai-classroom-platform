import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-950 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-purple-400">AI Classroom</h1>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              className="text-white hover:text-purple-400 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white hover:text-cyan-400 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-white transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
