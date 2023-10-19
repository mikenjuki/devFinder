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
import Image from "next/image";
import fallback from "@/public/assets/Oval.svg";
import {
  ovalIcon,
  companyIcon,
  locationIcon,
  twitterIcon,
  websiteIcon,
} from "@/public/assets/assets";

const RepoData = [
  { title: "Repos", number: 8 },
  { title: "Followers", number: 3893 },
  { title: "Following", number: 9 },
];

const AccountLinks = [
  {
    icon: locationIcon,
    title: "San Francisco",
  },
  {
    icon: twitterIcon,
    title: "Not Available",
  },
  {
    icon: websiteIcon,
    title: "https://github.com",
  },
  {
    icon: companyIcon,
    title: "@github",
  },
];

const UserPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <span className="cursor-pointer hover:text-devBlue transition-all">
          See Details
        </span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px] grid gap-3 p-4 grid-cols-[.25fr_1fr] font-mono font-normal dark:bg-bluishBlack items-center">
        <Avatar className="w-12 h-12 md:w-24 md:h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>
            <Image src={ovalIcon} alt="fallback" width={100} height={100} />
          </AvatarFallback>
        </Avatar>
        <DialogHeader className="">
          <DialogTitle className="flex flex-col md:flex-row justify-between pt-6 text-left">
            Mike Njuki
            <p className="text-[12px] font-normal leading-normal">
              Joined 25 Jan 2011
            </p>
          </DialogTitle>
          <DialogDescription className="text-devBlue text-left">
            @mikenjuki
          </DialogDescription>
        </DialogHeader>
        <article className="grid gap-4 py-4 col-span-2 md:col-start-2">
          <div className="">
            <p className="text-paleBlue dark:text-pureWhite text-[15px] leading-[25px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>
          <div className="w-full bg-offWhite dark:bg-darkBlack flex justify-around rounded-md py-[15px] ">
            {RepoData.map((data, i) => {
              return (
                <div key={i}>
                  <h5 className="text-[13px] leading-normal font-normal text-paleBlue dark:text-pureWhite">
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
              <div
                key={index}
                className="flex gap-2 md:min-w-[211px] text-paleBlue dark:text-offWhite"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={18}
                  height={10}
                />
                <p className="text-[15px] leading-normal font-normal">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </article>
      </DialogContent>
    </Dialog>
  );
};

export default UserPopup;
