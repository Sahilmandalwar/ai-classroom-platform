
import { CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClassroomCards = ({ classroom, handleCopyCode, copiedId }) => {
  const navigate = useNavigate();
  return (
    <div>
      <article
        key={classroom._id}
        onClick={() => navigate(`/classroom/${classroom._id}`)}
        className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 flex flex-col h-56 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-indigo-500/10 overflow-hidden"
      >
        {/* Subtle top gradient highlight on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="grow">
          <h3 className="text-lg font-semibold capitalize text-slate-100 group-hover:text-indigo-300 transition-colors duration-300 line-clamp-1 pr-2 mb-3">
            {classroom.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
            {classroom.description ||
              "No description provided for this classroom."}
          </p>
        </div>

        {/* Card Footer */}
        {/* Changed justify-between to justify-start since there is only one element now */}
        <div className="pt-4 mt-auto border-t border-slate-700/50 flex items-center justify-start relative">
          {/* Class Code Copy Utility (Moved to the left side) */}
          <div
            className="flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors group/code hover:border-slate-500 z-10"
            title="Click to copy code"
            // Prevent the copy button click from triggering the card's navigation
            onClick={(e) => {
              e.stopPropagation();
              handleCopyCode(e, classroom.classCode, classroom._id);
            }}
          >
            <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider hidden sm:inline-block">
              Code
            </span>
            <span className="font-mono text-sm text-slate-300 font-medium tracking-tight">
              {classroom.classCode}
            </span>
            <button className="ml-1 p-1 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-colors">
              {copiedId === classroom._id ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Floating "Enter" Button - Appears heavily on hover */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-50 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          {/* Note: pointer-events-none ensures it doesn't block the click of the parent article, it just acts as a visual indicator */}
          <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <ArrowRight className="w-5 h-5 group-hover:animate-pulse" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ClassroomCards;