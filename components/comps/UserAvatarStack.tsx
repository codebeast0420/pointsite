import React from "react";
import Avatar1 from "@/assets/images/Ellipse 106.png"
import Avatar2 from "@/assets/images/Ellipse 92.png"
import Avatar3 from "@/assets/images/Ellipse 111.png"
import { StaticImageData } from "next/image";

interface User {
  color: string;
  alt: string;
  image: StaticImageData;
}

const UserAvatarStack: React.FC = () => {
  const users: User[] = [
    { color: "c093ff", alt: "User 1", image: Avatar1 },
    { color: "ffa9ec", alt: "User 2", image: Avatar2 },
    { color: "ffc65b", alt: "User 3", image: Avatar3 },
  ];

  return (
    <div className="flex">
      {users.map((user, index) => (
        <div
          key={index}
          className="overflow-hidden -mr-2.5 rounded-full h-[43px] w-[43px]"
        >
          <img
            src={user.image.src}
            alt={user.alt}
            className="object-cover size-full"
          />
        </div>
      ))}
    </div>
  );
};

export default UserAvatarStack;
