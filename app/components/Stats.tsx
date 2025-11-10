interface StatsProps {
  stats: string[];
  traits: string[];
}

const Stats = ({}: StatsProps) => {
  return (
    <div className="w-100 h-150 border-6 bg-blue-400 rounded-2xl text-2xl flex flex-col items-center justify-center">
      Stats Component
    </div>
  );
};
export default Stats;
