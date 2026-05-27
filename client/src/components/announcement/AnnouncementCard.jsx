import { useAuth } from "../../contexts/authContext.jsx";


const AnnouncementCard = ({item, index, handleDeleteAnnouncement, teacher}) => {
      const { currentUserId } = useAuth();
    
  return (
    <div>
      <article
        key={item._id || index}
        className="flex flex-col h-full p-6 transition-colors border bg-slate-900/50 border-slate-800 rounded-xl hover:bg-slate-900"
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3
              className="text-lg font-semibold text-amber-400 line-clamp-2"
              title={item.title}
            >
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              By{" "}
              <span className="font-medium text-slate-300">
                {item.postedBy?.name || item.postedBy || "Teacher"}
              </span>
            </p>
          </div>
        </div>

        <p className="grow mb-6 text-sm leading-relaxed whitespace-pre-wrap text-slate-300">
          {item.message}
        </p>

        {/* CARD FOOTER */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800">
          <span className="text-xs font-medium text-slate-500">
            {new Date(
              item.timestamps || item.createdAt || Date.now(),
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>

          <div className="flex items-center gap-2">
            {/* Delete Button (Teacher Only) */}
            {currentUserId === teacher?._id && (
              <button
                onClick={() => handleDeleteAnnouncement(item._id)}
                className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-slate-800/50 hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                title="Delete announcement"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            )}

            {/* Open Button */}
            <button
              onClick={() => console.log("Open announcement:", item._id)}
              className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-slate-800/50 hover:bg-amber-400 text-slate-400 hover:text-slate-900"
              title="Open details"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AnnouncementCard
