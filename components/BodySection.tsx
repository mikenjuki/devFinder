import React, { Suspense } from "react";
import SearchInput from "./searchInput";
import UserList from "./users/userList";
import { UserItemSkeleton } from "./users/skeleton";

const BodySection = () => {
  return (
    <section className="w-full h-screen font-mono flex flex-col gap-6">
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div className="px-10">
      <Suspense  fallback={<UserItemSkeleton />}>
        <UserList />
        </Suspense>
      </div>
    </section>
  );
};

export default BodySection;
