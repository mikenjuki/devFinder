"use client";

import { useQuery } from "react-query";
import UserItem from "./userItem";
import { useSearchStore } from "@/store/searchStore";
import Loader from "../Loader";
import Empty from "../Empty";

const UserList = () => {
  const activeSearchTerm = useSearchStore((state) => state.searchTerm);
  console.log(
    "🚀 ~ file: userList.tsx:67 ~ UserList ~ activeSearchTerm:",
    activeSearchTerm
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["userList"],
    queryFn: () =>
      fetch(`/api/users?searchterm=${activeSearchTerm}`).then((res) =>
        res.json()
      ),
  });
  console.log("👚👚👚 ~ file: userList.tsx:80 ~ UserList ~ data:", data);

  return (
    <div className="space-y-4 mt-4">
      {isLoading && (
        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
          <Loader />
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

{
  /* </div> if (!isLoading) {
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 font-mono">
        {data.items.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
   */
}
