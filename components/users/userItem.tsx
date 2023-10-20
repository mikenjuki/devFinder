import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserPopup from "./userPopup";
import Image from "next/image";
import fallback from "@/public/assets/Oval.svg";

interface User {
  login: string;
  avatar_url: string;
}
interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { login, avatar_url } = user;
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4 ">
      <Avatar>
        <AvatarImage src={avatar_url} alt={`${login}'s avatar`} />
        <AvatarFallback>
          <Image src={fallback} alt="fallback" width={40} height={40} />
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1 group">
        <p className="text-sm font-medium leading-none">{login}</p>
        <p className="text-sm text-muted-foreground group-hover:text-devBlue">
          <UserPopup  />
        </p>
      </div>
    </div>
  );
};

export default UserItem;
