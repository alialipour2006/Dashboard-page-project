import {create} from "zustand";
import userData from "./data/user-data.ts";

import chartData from "./data/chart-data.ts";
import selesData from "./data/seles-data.ts";

interface UserQuery {
    searchText?: string;
}
export interface Chart{
    value: number;
    color: string;
    title: string;
  }
export interface Seles{
    orders: number;
    month: string;
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
    charts: Chart[];
    seless: Seles[];

    user: User[];
    addUser: (newUser: User) => void;
    updateUser: (id: number, updatedData: Partial<User>) => void;
    deletedUsers: (id: number) => void;

    setSearchText: (searchText: string) => void;
    userQuery: UserQuery;
    filteredUsers: () => User[];  // Make this a function that returns a User array
}

// Create the store
export const useStore = create<StateStore>((set, get) => ({
    charts:chartData,

    seless:selesData,

    deletedUsers: (id) =>
        set((state) => ({
            user: state.user.filter(item => item.id !== id)
        })),

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
