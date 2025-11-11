import Stats from "./Stats";
import Avatar from "./Avatar";

const Profile = () => {
  const stats = [
    { stat: "Coding Strength", fillPercent: 90 },
    { stat: "Coding Speed", fillPercent: 75 },
    { stat: "Debugging Skills", fillPercent: 83 },
    { stat: "Charisma", fillPercent: 66 },
    { stat: "Braincells", fillPercent: 10 },
  ];
  return (
    <div className="flex flex-row gap-5 jusytify-start items-center">
      <Stats stats={stats} />
      <Avatar />
    </div>
  );
};
export default Profile;
