

import { LayoutDashboard, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { fetchSessions } from "../../services/sessionServices.js";
import SessionList from "../../components/session/SessionList.jsx";
import SessionForm from "../../components/session/SessionForm.jsx";
import { useAuth } from "../../contexts/authContext.jsx";

const SessionPage = ({ activeTab, classroom }) => {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUserId } = useAuth();

  // Determine if user is the teacher
  const isTeacher = currentUserId === classroom?.teacher?._id;

  useEffect(() => {
    const fetchClassSessions = async () => {
      if (!classroom?._id) return;

      setIsLoading(true);
      try {
        const data = await fetchSessions(classroom._id);
        setSessions(data.sessions || []);
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if the tab is active to save API calls
    if (activeTab === "sessions") {
      fetchClassSessions();
    }
  }, [classroom?._id, activeTab]);

  // Early return keeps the JSX tree clean
  if (activeTab !== "sessions") return null;

  return (
    <div className="animate-fade-in-up space-y-8 w-full max-w-7xl mx-auto pb-12">
      {/* 1. TOP SECTION: Create Form (Teacher Only) */}
      {isTeacher && (
        <div className="bg-slate-900/40 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800/80 pb-5">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <PlusCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-100">
              Schedule New Session
            </h2>
          </div>

          {/* Centering the form for a cleaner look */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-7xl">
              <SessionForm classroomId={classroom?._id} setSessions={setSessions}/>
            </div>
          </div>
        </div>
      )}

      {/* 2. BOTTOM SECTION: Sessions List (Visible to Everyone) */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-800/80 pb-5">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <LayoutDashboard className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-xl font-semibold text-slate-100">
            Session Timeline
          </h2>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-48 space-y-4">
            <div className="w-8 h-8 border-4 border-slate-700 border-t-emerald-500 rounded-full animate-spin"></div>
            <span className="text-slate-500 text-sm font-medium animate-pulse">
              Loading sessions...
            </span>
          </div>
        ) : (
          <SessionList sessions={sessions} isTeacher={isTeacher} setSessions={setSessions} />
        )}
      </div>
    </div>
  );
};

export default SessionPage;