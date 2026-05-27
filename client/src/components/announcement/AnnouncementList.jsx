
import { Megaphone } from "lucide-react";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementList = ({
  handleDeleteAnnouncement, classroom, announcements
}) => {
  return (
    <section className="w-full animate-fade-in-up">
      {announcements.length === 0 ? (
        // Empty State UI
        <div className="flex flex-col items-center justify-center p-12 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20 text-slate-500">
          <div className="p-4 mb-4 rounded-full bg-slate-800/50">
            <Megaphone className="w-8 h-8 text-slate-600" />
          </div>
          <p className="text-lg font-medium text-slate-400">
            No announcements posted yet.
          </p>
        </div>
      ) : (
        // Vertical Timeline/List Layout (Replaced the Grid)
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item, index) => (
            <div
              key={item._id || index}
              className="transition-all duration-200 hover:-translate-y-1"
            >
              <AnnouncementCard
                item={item}
                index={index}
                handleDeleteAnnouncement={handleDeleteAnnouncement}
                teacher={classroom?.teacher}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AnnouncementList;
