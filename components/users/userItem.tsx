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
      {/* image <Image src={avatar_url} alt={`${login}'s avatar`} width={500} height={500} />*/}
      <Avatar>
        <AvatarImage src={user.avatar_url} alt={`${user.login}'s avatar`} />
        <AvatarFallback>
          <Image src={fallback} alt="fallback" width={40} height={40} />
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1 group">
        <p className="text-sm font-medium leading-none">{login}</p>
        <p className="text-sm text-muted-foreground group-hover:text-devBlue">
          <UserPopup />
        </p>
      </div>
    </div>
  );
};

export default UserItem;

{
  /* <div className="card shadow-md compact bg-base-100">
{login}
<div className="flex-row items-center space-x-4 card-body">
  <div>
    <div className="avatar">
      <div className="rounded-full shadow w-14 h-14">
        <Image
          src={avatar_url}
          alt={`${login}'s avatar`}
          width={500}
          height={500}
        />
      </div>
    </div>
  </div>

  <div>
    <h2 className="card-title">{login}</h2>
    <Link href={""} className=" text-base-content text-opacity-40 ">
      Visit Profile
    </Link>
  </div>
</div>
</div> */
}
