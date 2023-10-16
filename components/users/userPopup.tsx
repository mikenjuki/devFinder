import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RepoData = [
  { title: "Repos", number: 8 },
  { title: "Followers", number: 3893 },
  { title: "Following", number: 9 },
];

const AccountLinks = [
  {
    icon: "A",
    location: "San Francisco",
  },
  {
    icon: "KK",
    location: "Not Available",
  },
  {
    icon: "MN",
    location: "https://github.com",
  },
  {
    icon: "i58",
    location: "@github",
  },
];

const UserPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer hover:text-devBlue transition-all">
          See Details
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] grid gap-3 p-4 lg:grid-cols-[.25fr_1fr] font-mono font-normal dark:bg-bluishBlack">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DialogHeader>
          <DialogTitle className="flex justify-between pt-6">
            Mike Njuki
            <p className="text-[12px] font-normal leading-normal">
              Joined 25 Jan 2011
            </p>
          </DialogTitle>
          <DialogDescription>@mikenjuki</DialogDescription>
          <article className="grid gap-4 py-4">
            <div className="">
              <p className="dark:text-pureWhite text-[15px] leading-[25px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </p>
            </div>
            {/* <h5 > */}
            <div className="w-full bg-darkBlack flex justify-around rounded-md py-[15px] ">
              {RepoData.map((data, i) => {
                return (
                  <div key={i}>
                    <h5 className="text-[13px] leading-normal font-normal">
                      {data.title}
                    </h5>
                    <p className="text-[22px] leading-normal font-[700]">
                      {data.number}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-6">
              {AccountLinks.map((item, index) => (
                <div key={index} className="flex gap-2 md:min-w-[211px]">
                  <p>{item.icon}</p>
                  <p className="text-[15px] leading-normal font-normal">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserPopup;
