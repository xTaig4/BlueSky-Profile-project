import Image from "next/image";

const Avatar = () => {
  return (
    <div className="h-150 w-100 bg-blue-400 rounded-2xl">
      <Image
        src="/profile_pic.png"
        alt="Avatar"
        className="border-6 border-white rounded-2xl object-cover h-full w-full"
        width={400}
        height={600}
        priority
      />
    </div>
  );
};

export default Avatar;
