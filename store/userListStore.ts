import { create } from "zustand";

interface userListStore {
  listData: User[];
  setListData: (listData: User[]) => void;
}

const useUserListStore = create<userListStore>((set) => ({
  listData: [],
  setListData: (listData) => set({ listData: listData }),
}));

export default useUserListStore;
