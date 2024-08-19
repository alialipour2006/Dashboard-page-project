import * as React from 'react';
import {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {User} from "../useStore.ts";


interface Props {
    user: User;
}

const UserInfoPopOver = ({user}: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, user: User) => {
        setAnchorEl(event.currentTarget);
        setSelectedUser(user);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setSelectedUser(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>

            <div key={user.id} style={{display: 'inline-block', margin: '10px'}}>
                <Typography
                    aria-owns={open ? `mouse-over-popover-${user.id}` : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(event) => handlePopoverOpen(event, user)}
                    onMouseLeave={handlePopoverClose}
                >
                    <VisibilityOutlinedIcon/>
                </Typography>

                <Popover
                    id={`mouse-over-popover-${user.id}`}
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open && selectedUser?.id === user.id}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    {selectedUser && (
                        <div style={{padding: '80px'}}>
                            <Typography variant="h6">اطلاعات کاربران</Typography>
                            <Typography variant="body2">نام و نام
                                خانوادگی: {selectedUser.name} {selectedUser.lastName}</Typography>
                            <Typography variant="body2"> شماره تماس:{selectedUser.mobile}</Typography>
                            <Typography variant="body2"> ادرس:{selectedUser.address}</Typography>
                            <Typography variant="body2"> زمان ثبت نام:{selectedUser.createTime}</Typography>
                            <Typography variant="body2"> امتیاز کلاب:{selectedUser.clubRate}</Typography>
                        </div>
                    )}
                </Popover>
            </div>

        </div>
    );
}

export default UserInfoPopOver;
