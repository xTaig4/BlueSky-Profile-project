// components/DarkModeToggle.tsx
import { useNightMode } from "../hooks/useNightMode";

const NightModeToggle = () => {
  const [isNight, setIsNight] = useNightMode();

  return (
    <button
      onClick={() => setIsNight(!isNight)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isNight ? "🌙" : "☀️"}
    </button>
  );
};

export default NightModeToggle;
