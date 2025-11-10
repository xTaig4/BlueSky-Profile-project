interface FloatingBarProps {
  tab: string[];
  activeTab?: string;
  onSelect?: (tab: string) => void;
}

const FloatingBar = ({ tab, activeTab, onSelect }: FloatingBarProps) => {
  return (
    <div className="flex p-5 gap-5 items-center border-6 bg-blue-400 h-20 w-200 rounded-lg">
      {tab.map((item) => (
        <button
          key={item}
          className={`p-1 flex-1 text-lg font-medium transition-colors rounded-lg ${
            activeTab === item
              ? "bg-blue-500 text-white"
              : "text-white hover:bg-blue-500"
          }`}
          onClick={() => onSelect && onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FloatingBar;
