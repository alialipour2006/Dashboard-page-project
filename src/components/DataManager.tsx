import React from "react";
import useStore from "../useStore.ts";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

const DataManager: React.FC = () => {
    const {addUser, updateUser} = useStore();

    const handleAddData = () => {
        const newData = {
            id: 1,
            name: 'محمدحسین',
            lastName: 'طارمی',
            mobile: '09393023301',
            createTime: 1723984406,
            address: 'تهران مستقیم دست راست',
            orders: [
                {
                    id: 22,
                    productName: 'آیفون ۱۳',
                    color: 'مشکی',
                    amount: '300000000'
                }
            ],
            gender: 'male',
            lastLogin: 1723984406,
            clubRate: 34332,

        }
        addUser(newData);
    };

    const handleUpdateData = () => {
        updateUser(1, {name: "حسین"});
    };

    return (
        <Box>
            <Button onClick={handleAddData}>ایجاد کاربر جدید</Button>
            <Button onClick={handleUpdateData}></Button>
        </Box>
    );
};

export default DataManager;
