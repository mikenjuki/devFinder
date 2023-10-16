import UserItem from "./userItem";

interface User {
  login: string;
  avatar_url: string;
  id: number;
}

const users: User[] = [
  {
    id: 1,
    login: "Mike Njuki ",
    avatar_url: "",
  },
  {
    id: 2,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 3,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 4,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 5,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 6,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 7,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 8,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 9,
    login: "Mike Njuki",
    avatar_url: "",
  },
  {
    id: 10,
    login: "Mike Njuki",
    avatar_url: "",
  },
];

const UserList = () => {
  //   const { users, loading } = useContext(GithubContext);
  let loading = false;

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 font-mono">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default UserList;
