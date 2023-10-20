"use client";

import { useQuery } from "react-query";
import UserItem from "./userItem";

import Empty from "../Empty";
import { UserItemSkeleton } from "./skeleton";
import useUserListStore from "@/store/userListStore";

interface UserData {
  data: [];
  items: User[];
  isLoading: boolean;
}

const UserList = () => {
  const { data, isLoading, isFetching } = useQuery<UserData>("userList");
  console.log("🚀 ~ file: userList.tsx:18 ~ UserList ~ data:", data);
  const userList = useUserListStore((state) => state.listData);

  let skeletonElements = [];
  for (let i = 0; i < 10; i++) {
    skeletonElements.push(<UserItemSkeleton key={i} />);
  }

  return (
    <div className="space-y-4 mt-4">
      {isLoading && (
        <div className=" w-full flex flex-wrap items-center gap-10">
          {skeletonElements}
        </div>
      )}

      {!data && !isLoading && <Empty label="Give me a user to search for 🤓" />}
      {data && (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 font-mono">
          {data.items.map((user: User) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
