import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      name: "My Developer Profile",
      description:
        "My first developer profile webapp showcasing my skills, projects, and contact information.",
      image:
        "https://raw.githubusercontent.com/xTaig4/My_Developer_profile/refs/heads/main/my-dev-profile/Screenshots/profile_web.JPG?token=GHSAT0AAAAAADKZ7VZRUJOSFVN7B4VNK5462ISPRZA",
      link: "https://my-developer-profile-m9jc.vercel.app",
    },
    {
      name: "Kanji Tales",
      description:
        "A webapp where users kan add kanji, they have learned and generate short stories or sentence of",
      image:
        "https://raw.githubusercontent.com/xTaig4/KanjiTales/refs/heads/main/kanji_tales/public/KanjiTales.JPG",
      link: "https://github.com/xTaig4/KanjiTales",
    },
    {
      name: "Weeb Words",
      description:
        "Weeb Words is a sleek and minimalist anime quote web app where users can view, filter, and submit inspirational, emotional, or funny quotes from popular anime characters.",
      image:
        "https://raw.githubusercontent.com/xTaig4/WeebWords_v2/refs/heads/main/weeb-words/Screenshots/QuoteWeb.JPG",
      link: "https://github.com/xTaig4/WeebWords_v2",
    },
    {
      name: "QuotesAPI",
      description:
        "A RESTful API for fetching random quotes. Used in Weeb Words web app.",
      image:
        "https://raw.githubusercontent.com/xTaig4/QuotesAPI/refs/heads/main/image_2025-09-30_160812512.png",
      link: "https://github.com/xTaig4/QuotesAPI",
    },
    {
      name: "Runaway",
      description:
        "Runaway is a simple, addictive game inspired by the classic Flappy Bird. The goal is to guide your character through obstacles, achieving the highest possible score.",
      image:
        "https://raw.githubusercontent.com/xTaig4/Runaway/refs/heads/main/Assets/Screenshots/RunawayGame.JPG",
      link: "https://github.com/xTaig4/Runaway",
    },
  ];

  return (
    <div className="gap-5 border-6 bg-blue-400 w-200 h-150 rounded-2xl text-2xl pt-5 flex flex-col items-center">
      <h1>Projects Component</h1>
      <div className="gap-4 grid grid-cols-3 place-items-center">
        {projects.map((project) => (
          <div
            className="border-6 border-white w-50 h-35 justify-center flex flex-col items-center text-center rounded-2xl gap-1"
            key={project.name}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={160}
              height={120}
              className="rounded-lg"
            />
            <h3 className="text-lg">{project.name}</h3>
            {/* <p>{project.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
