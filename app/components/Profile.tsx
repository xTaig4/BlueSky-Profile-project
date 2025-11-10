import Stats from "./Stats";
import Avatar from "./Avatar";

const Profile = () => {
  const stats = ["Posts: 120", "Followers: 300", "Following: 180"];
  const traits = ["Creative", "Team Player", "Hardworking"];
  return (
    <div className="flex flex-row gap-5">
      <Stats stats={stats} traits={traits} />
      <Avatar />
    </div>
  );
};
export default Profile;
