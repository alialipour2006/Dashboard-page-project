import {create} from "zustand";
import data from "./data/data.ts";

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
    data: User[];
    addData: (newData: User) => void;
    //Partial<MyObject> is used in the updateData function to allow updating only specific fields of MyObject
    updateData: (id: number, updatedData: Partial<User>) => void;

}

// Create the store
export const useStore = create<StateStore>((set) => ({
    data: data,
    addData: (newData) =>
        set((state) => ({
            data: [...state.data, newData],
        })),
    updateData: (id, updatedData) =>
        set((state) => ({
            data: state.data.map((item) =>
                item.id === id ? {...item, ...updatedData} : item
            ),
        })),
}));

export default useStore;