import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {User} from "../useStore.ts";

interface Props {
    user: User;
}

const UserInfoDialog = ({user}: Props) => {
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
            <div key={user.id} style={{display: 'inline-block', margin: '10px'}}>
                <Typography
                    aria-haspopup="true"
                    onClick={() => handleDialogOpen(user)}
                    style={{cursor: 'pointer'}}
                >
                    <VisibilityOutlinedIcon/>
                </Typography>

                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby={`dialog-title-${user.id}`}
                >
                    {selectedUser && (
                        <>
                            <DialogTitle id={`dialog-title-${user.id}`}>اطلاعات کاربران</DialogTitle>
                            <DialogContent>
                                <Typography variant="body2">نام و نام
                                    خانوادگی: {selectedUser.name} {selectedUser.lastName}</Typography>
                                <Typography variant="body2">شماره تماس: {selectedUser.mobile}</Typography>
                                <Typography variant="body2">آدرس: {selectedUser.address}</Typography>
                                <Typography variant="body2">زمان ثبت نام: {selectedUser.createTime}</Typography>
                                <Typography variant="body2">امتیاز کلاب: {selectedUser.clubRate}</Typography>
                            </DialogContent>
                        </>
                    )}
                </Dialog>
            </div>
        </div>
    );
}

export default UserInfoDialog;
