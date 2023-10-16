import React from "react";
import SearchInput from "./searchInput";
import UserList from "./users/userList";

const BodySection = () => {
  return (
    <section className="w-full font-mono ">
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div>
        <UserList />
      </div>
    </section>
  );
};

export default BodySection;
