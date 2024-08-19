import {create} from "zustand";
import userData from "./data/user-data.ts";

interface UserQuery {
    searchText?: string;
}

export interface Order {
    id: number;
    productName: string;
    color: string;
    amount: string;
}

export interface User {
    id: number;
    name: string;
    lastName: string;
    mobile: string;
    createTime: number;
    address: string;
    orders: Order[];
    gender: string;
    lastLogin: number;
    clubRate: number;
}

interface StateStore {
    user: User[];
    addUser: (newUser: User) => void;
    updateUser: (id: number, updatedData: Partial<User>) => void;
    setSearchText: (searchText: string) => void;
    userQuery: UserQuery;
    filteredUsers: () => User[];  // Make this a function that returns a User array
}

// Create the store
export const useStore = create<StateStore>((set, get) => ({
    userQuery: {},
    setSearchText: (searchText) => set(() => ({userQuery: {searchText}})),

    user: userData,
    addUser: (newData) =>
        set((state) => ({
            user: [...state.user, newData],
        })),
    updateUser: (id, updatedData) =>
        set((state) => ({
            user: state.user.map((item) =>
                item.id === id ? {...item, ...updatedData} : item
            ),
        })),

    filteredUsers: () => {
        const {user, userQuery} = get();
        const searchText = userQuery.searchText?.toLowerCase() || "";
        if (!searchText) return user;
        return user.filter(
            (u) =>
                u.name.toLowerCase().includes(searchText) ||
                u.lastName.toLowerCase().includes(searchText) ||
                u.mobile.includes(searchText)
        );
    },
}));

export default useStore;
