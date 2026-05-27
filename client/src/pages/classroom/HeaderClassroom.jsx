import { CheckCircle2, Copy, GraduationCap } from "lucide-react"
import { useState } from "react";


 

const ClassroomHeader = ({classroom}) => {

      const [copiedId, setCopiedId] = useState(false);

  // Utility for class code copy
  const handleCopyCode = () => {
    if (!classroom?.classCode) return;
    navigator.clipboard.writeText(classroom.classCode);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };
  return (
    <div>
      <header className="relative p-6 md:p-10 overflow-hidden border shadow-2xl rounded-3xl bg-linear-to-br from-slate-900 to-slate-950 border-slate-800">
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 to-orange-500"></div>
        <div className="absolute top-0 right-0 w-96 h-96 translate-x-1/3 -translate-y-1/3 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold tracking-wider text-amber-400 uppercase bg-amber-400/10 rounded-full border border-amber-400/20 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              Classroom Hub
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white capitalize md:text-5xl">
              {classroom.title}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <div className="flex items-center justify-center w-8 h-8 border rounded-full bg-slate-800/80 border-slate-700 font-bold text-xs text-white">
                {classroom.teacher?.name?.charAt(0).toUpperCase() || "T"}
              </div>
              <span className="text-sm md:text-base">
                Instructor:{" "}
                <span className="font-semibold text-slate-200">
                  {classroom.teacher?.name || "Unknown"}
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
              Class Code
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold tracking-widest text-amber-400">
                {classroom.classCode}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                title="Copy Code"
              >
                {copiedId ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ClassroomHeader
