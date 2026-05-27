import { Home, ArrowLeft } from "lucide-react";

const InvalidPage = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center font-sans px-4 sm:px-6 lg:px-8 selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      {/* Background ambient glow to match the homepage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Glowing 404 Text */}
        <p className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 drop-shadow-lg mb-6">
          404
        </p>

        {/* Main error message */}
        <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
          Looks like you're lost in space.
        </h1>

        {/* Explanatory text */}
        <p className="mt-4 text-lg text-slate-400">
          We couldn't find the page you're looking for. The link might be
          broken, or the page may have been moved or deleted.
        </p>

        {/* Navigation Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Action: Go Back */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Go back
          </button>

          {/* Secondary Action: Go Home */}
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-full border border-slate-600 shadow-sm transition-all hover:border-slate-500"
          >
            <Home className="w-5 h-5 text-slate-400" />
            Take me home
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidPage;
