interface StatsModalProps {
  onClose: () => void;
}

export function StatsModal({ onClose }: StatsModalProps) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close stats modal"
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-3xl font-bold transition"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-green-400">
          My Stats
        </h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=rhuynh06&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="mx-auto my-6 rounded-xl shadow-lg"
        />

        <img
          src="https://leetcard.jacoblin.cool/unknownperson2"
          alt="LeetCode Stats"
          className="mx-auto my-6 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
