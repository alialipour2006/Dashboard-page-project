import {create} from "zustand";
import userData from "./data/user-data.ts";

export interface Order {
    id: number;
    productName: string;
    color: string;
    amount: string;
}

// Define the shape of your object
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
    //Partial<MyObject> is used in the updateData function to allow updating only specific fields of MyObject
    updateUser: (id: number, updatedData: Partial<User>) => void;

}

// Create the store
export const useStore = create<StateStore>((set) => ({
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
}));

export default useStore;