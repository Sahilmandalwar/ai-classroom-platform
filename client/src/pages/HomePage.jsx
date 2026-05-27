
import {
  ArrowRight,
  Video,
  FileText,
  BellDot,
  UserCircle2,
  LogIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


// define keyframes for the floating animations
const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(-1deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.4); }
    50% { opacity: 1; box-shadow: 0 0 20px rgba(59, 130, 246, 0.7); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
`;

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <>
      <style>{animationStyles}</style>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="sm:text-center lg:text-left lg:col-span-6 relative z-20">
            {/* Dark mode optimized badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              New: Interactive Whiteboards
            </div>

            {/* Inverted heading text, brightened gradient */}
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
              Teach, Share, and Connect <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                Without the Clutter.
              </span>
            </h1>

            {/* Lightened paragraph text for readability */}
            <p className="mt-6 text-lg text-slate-300 sm:text-xl md:max-w-2xl sm:mx-auto lg:mx-0 leading-relaxed">
              Keep students engaged beyond the physical classroom. Stream live
              sessions, drop instant updates, and build a digital hub for all
              your course materials.
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              {/* Primary button */}
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-0.5"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Join Today
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary button */}
              <button
                className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full border border-slate-600 shadow-sm transition-all hover:border-slate-500"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <LogIn />
                LogIn your account
              </button>
            </div>

           
          </div>

          {/* Right Column: NEW FLOATING ANIMATION SCENE */}
          <div className="mt-20 lg:mt-0 lg:col-span-6 relative min-h-112.5 flex items-center justify-center">
            {/* Background Glow (Kept and intensified) */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/15 to-indigo-600/15 rounded-[3rem] blur-3xl z-0 transform scale-110"></div>

            {/* Central Floating Element: Live Class Indicator */}
            <div className="relative z-10 w-full max-w-sm aspect-4/3 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-700 p-6 shadow-2xl animate-float">
              {/* Header of the central element */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <UserCircle2 className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Dr. Evelyn Reed
                    </p>
                    <p className="text-xs text-slate-400">
                      Advanced Astrophysics
                    </p>
                  </div>
                </div>
                {/* Live Indicator Dot */}
                <div className="px-3 py-1 rounded-full bg-red-950 border border-red-500 text-red-400 text-xs font-bold flex items-center gap-1.5 animate-pulse-glow">
                  <span className="w-2 h-2 rounded-full bg-red-500 "></span>
                  LIVE
                </div>
              </div>

              {/* Mock UI representation of a live stream */}
              <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                <Video className="w-12 h-12 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 bg-slate-900/80 px-2 py-1 rounded md text-xs text-slate-200">
                  148 Students Connected
                </div>
              </div>
            </div>

            {/* Orbiting Element 1: Note Icon (Top Left) */}
            <div
              className="absolute top-10 left-10 z-20 animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-3 w-52">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Lecture_Notes.pdf
                  </p>
                  <p className="text-xs text-slate-400">Shared 2m ago</p>
                </div>
              </div>
            </div>

            {/* Orbiting Element 2: Announcement (Bottom Right) */}
            <div
              className="absolute bottom-10 right-10 z-20 animate-float-slow"
              style={{ animationDelay: "2.5s" }}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-3 w-56">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <BellDot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Project Deadline Update
                  </p>
                  <p className="text-xs text-slate-400">
                    Check Announcement Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
