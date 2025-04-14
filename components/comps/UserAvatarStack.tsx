import React from "react";
import Avatar1 from "@/assets/images/Ellipse 106.svg"
import Avatar2 from "@/assets/images/Ellipse 92.svg"
import Avatar3 from "@/assets/images/Ellipse 111.svg"
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
    <div className="flex" aria-label="User avatar stack">
      {users.map((user, index) => (
        <div
          key={index}
          className="overflow-hidden -mr-2.5 rounded-full h-[43px] w-[43px]"
          aria-label={`User avatar ${index + 1}`}
        >
          <img
            src={user.image.src}
            alt={user.alt}
            className="object-cover size-full"
            aria-label={`User avatar ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default UserAvatarStack;
