const Projects = () => {
  const projectList = [
    { name: "Project 1", description: "Description for project 1" },
    { name: "Project 2", description: "Description for project 2" },
    { name: "Project 3", description: "Description for project 3" },
    { name: "Project 4", description: "Description for project 4" },
  ];

  return (
    <div className="gap-5 border-6 bg-blue-400 w-100 h-150 rounded-2xl text-2xl justify-center flex flex-col items-center">
      <h1>Projects Component</h1>
      <div className="gap-4 grid-cols-2 grid">
        {projectList.map((project) => (
          <div
            className="border border-gray-300 w-40 h-30 justify-center flex flex-col items-center text-center rounded-lg p-2"
            key={project.name}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
