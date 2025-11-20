interface FloatingBarProps {
  tab: string[];
  activeTab?: string;
  onSelect: (tab: string) => void;
}

const FloatingBar = ({ tab, activeTab, onSelect }: FloatingBarProps) => {
  return (
    <div className="flex p-5 gap-5 items-center border-6  bg-con-light dark:bg-con-night h-20 w-200 rounded-lg">
      {tab.map((item) => (
        <button
          key={item}
          className={`p-1 flex-1 text-lg font-medium transition-colors rounded-lg ${
            activeTab === item
              ? "bg-button-light dark:bg-button-night"
              : " hover:text-gray-300"
          }`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FloatingBar;
