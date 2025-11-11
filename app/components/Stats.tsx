interface StatsProps {
  stats: { stat: string; fillPercent: number }[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="w-100 h-150 border-6 bg-blue-400 rounded-2xl text-2xl flex flex-col p-5">
      <h3 className="text-white font-bold mb-4">Stats</h3>
      <div className="w-75 space-y-3 ">
        {stats.map(({ stat, fillPercent }) => (
          <div key={stat} className="flex items-center justify-between">
            <span className="text-lg text-white font-medium min-w-0 shrink ">
              {stat}
            </span>
            <div className="flex h-4 w-40 overflow-hidden rounded-full bg-gray-700">
              <div
                className="bg-white flex h-full transition-all duration-500"
                style={{ width: `${fillPercent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-9 flex flex-col gap-2 font-bold">
        <h3>About me</h3>
        <p className="text-white text-lg text-justify">
          Certified nerd with expertise in React, TypeScript, NEXT.js, .NET and
          C#. I love creating user-friendly applications, solving complex
          problems through code and make pour-coffee.
        </p>
      </section>
    </div>
  );
};

export default Stats;
