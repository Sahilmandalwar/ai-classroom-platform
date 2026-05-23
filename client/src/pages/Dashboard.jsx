
import { useEffect, useState } from "react";
import {
  getMyClassrooms,
  createClassroom,
  joinClassroom,
} from "../services/classroomServices.js";

const Dashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [joinCode, setJoinCode] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const data = await getMyClassrooms();
        setClassrooms(data.classrooms || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClassrooms();
  }, []);

  const handleCreateClassroom = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      const data = await createClassroom({
        title,
        description,
      });

      setClassrooms([...classrooms, data.classroom]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinClassroom = async (e) => {
    e.preventDefault();
    if (!joinCode.trim()) return;

    setIsJoining(true);
    try {
      const data = await joinClassroom({"classCode":joinCode});
      setClassrooms([...classrooms, data.classroom]);
      setJoinCode("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 p-4 md:p-8 font-sans antialiased text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Page Level: H1 */}
        <header className="mb-10 border-b border-gray-800 pb-4">
          <h1 className="text-4xl font-semibold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Manage and organize your classrooms.
          </p>
        </header>

        {/* Section 1: Forms Grid (Create & Join) */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT: Create Classroom */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-sm hover:bg-slate-800">
            <h2 className="text-lg font-medium text-white mb-4">
              Create a Classroom
            </h2>

            <form
              onSubmit={handleCreateClassroom}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                required
                placeholder="Classroom title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting || !title.trim()}
                // Handled properly: Added active scale (click physics) and focus rings
                className="self-start bg-gray-100 hover:bg-white disabled:bg-gray-700 disabled:text-gray-500 text-gray-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 mt-1"
              >
                {isSubmitting ? "Creating..." : "Create"}
              </button>
            </form>
          </div>

          {/* RIGHT: Join Classroom */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-sm  hover:bg-slate-800">
            <h2 className="text-lg font-medium text-white mb-4">
              Join a Classroom
            </h2>

            <form
              onSubmit={handleJoinClassroom}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                required
                placeholder="Enter class code"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isJoining || !joinCode.trim()}
                // Handled properly: active state and focus rings for the secondary button
                className="self-start bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white border border-gray-600 disabled:border-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 mt-1"
              >
                {isJoining ? "Joining..." : "Join"}
              </button>
            </form>
          </div>
        </section>

        {/* Section 2: Active Classrooms Grid */}
        <section>
          <div className="mb-6 border-b border-gray-800 pb-3">
            <h2 className="text-xl font-medium text-white">
              Active Classrooms
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-44 animate-pulse shadow-md"
                >
                  <div className="h-5 bg-gray-700 rounded w-2/3 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                </div>
              ))}
            </div>
          ) : classrooms.length === 0 ? (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center border-dashed">
              <p className="text-gray-400 text-sm">No classrooms available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classrooms.map((classroom) => (
                <article
                  key={classroom._id}
                  // True Card Styling: Added shadows, transform (lift), and smooth transitions
                  className="group bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col shadow-md hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/20 hover:border-gray-500 transition-all duration-300 ease-out cursor-pointer"
                >
                  <div className="grow">
                    <h3 className="text-lg font-medium capitalize text-gray-100 group-hover:text-white transition-colors mb-2">
                      {classroom.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {classroom.description || "No description provided."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-700 mt-auto flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">
                      Class Code
                    </span>
                    <span className="font-mono text-sm text-gray-300 bg-gray-900 px-2 py-1 rounded border border-gray-700 select-all">
                      {classroom.classCode}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Dashboard;