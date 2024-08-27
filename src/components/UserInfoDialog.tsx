import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { User } from '../useStore.ts';
import { IconButton } from '@mui/material';

interface Props {
  user: User;
}

const UserInfoDialog = ({ user }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDialogOpen = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedUser(null);
    setOpen(false);
  };

  return (
    <div>
      <div key={user.id} style={{ display: 'inline-block' }}>
        <IconButton
          aria-haspopup='true'
          onClick={() => handleDialogOpen(user)}
          style={{ cursor: 'pointer' }}
          sx={{ color: '#4caf50' }}
        >
          <RemoveRedEyeOutlinedIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleDialogClose}
          aria-labelledby={`dialog-title-${user.id}`}
        >
          {selectedUser && (
            <>
              <DialogTitle
                id={`dialog-title-${user.id}`}
                sx={{
                  backgroundColor: '#004D3F',
                  color: 'white',
                  padding: '30px',
                }}
              >
                اطلاعات کاربران
              </DialogTitle>
              <DialogContent
                sx={{
                  backgroundColor: '#004D3F',
                  color: 'white',
                  padding: '60px',
                }}
              >
                <Typography variant='body2'>
                  نام و نام خانوادگی: {selectedUser.name} {selectedUser.lastName}
                </Typography>
                <Typography variant='body2'>شماره تماس: {selectedUser.mobile}</Typography>
                <Typography variant='body2'>آدرس: {selectedUser.address}</Typography>
                <Typography variant='body2'>
                  زمان ثبت نام: {selectedUser.createTime}
                </Typography>
                <Typography variant='body2'>امتیاز کلاب: {selectedUser.clubRate}</Typography>
              </DialogContent>
            </>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default UserInfoDialog;
