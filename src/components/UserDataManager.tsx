import React from 'react';
import useStore from '../useStore.ts';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const UserDataManager: React.FC = () => {
  const { addUser, updateUser } = useStore();

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
          amount: '300000000',
        },
      ],
      gender: 'male',
      lastLogin: 1723984406,
      clubRate: 34332,
    };
    addUser(newData);
  };

  const handleUpdateData = () => {
    updateUser(1, { name: 'حسین' });
  };

  return (
    <Box>
      <Button
        onClick={handleAddData}
        sx={{
          backgroundColor: '#004D3F',
          color: 'white',
          borderRadius: '12px',
          padding: '16px 30px',
          maxWidth: '400px',
          marginX: '10px',
        }}
      >
        ایجاد کاربر جدید
      </Button>
      <Button
        onClick={handleUpdateData}
        sx={{
          backgroundColor: '#004D3F',
          color: 'white',
          borderRadius: '12px',
          padding: '16px 30px',
          maxWidth: '400px',
        }}
      >
        ویرایش کاربر
      </Button>
    </Box>
  );
};

export default UserDataManager;
