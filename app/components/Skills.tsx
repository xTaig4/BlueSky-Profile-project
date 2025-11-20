const Skills = () => {
  const skills = [
    { name: "TypeScript", rating: 4 },
    { name: "C#", rating: 5 },
    { name: "React", rating: 5 },
    { name: "ASP.NET", rating: 4 },
    { name: "Next.js", rating: 4 },
    { name: "Docker", rating: 3 },
    { name: "HTML, CSS", rating: 5 },
    { name: "Tailwind CSS", rating: 5 },
  ];
  return (
    <div className="border-6 dark:bg-con-night bg-con-light w-200 h-150 rounded-2xl text-2xl pt-5 flex flex-col items-center ">
      <ul className="text-text grid grid-cols-2 gap-x-20 gap-y-4 p-4">
        {skills.map((skill) => (
          <li key={skill.name} className="text-white text-3xl flex gap-5 ">
            <span className="w-45">{skill.name}</span>
            <span>
              {"★".repeat(skill.rating)}
              {"☆".repeat(5 - skill.rating)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
