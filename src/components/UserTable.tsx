import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import {IconButton, Stack} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useStore from "../useStore.ts";
import UserDataManager from "./UserDataManager.tsx";
import FormatDate from "./FormatDate.tsx";
import SearchInput from "./SearchUser.tsx";
import UserInfoDialog from "./UserInfoDialog.tsx";

const UserTable = () => {
    const filteredUsers = useStore((state) => state.filteredUsers());
    const deletedUser = useStore((state) => state.deletedUsers);

    return (
        <>

            <Stack direction="row" spacing={2}
                   sx={{mb: 2, justifyContent: 'space-between', width: '1000px', mx: 'auto'}}>
                <SearchInput/>
                <UserDataManager/>
            </Stack>


            <TableContainer component={Paper} sx={{width: '1000px', mx: 'auto', borderRadius: "20px"}}>
                <Table sx={{width: 1, tableLayout: 'fixed'}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: '#243757', color: 'white'}}>

                            <TableCell style={{width: '20%', textAlign: "center"}}>#</TableCell>
                            <TableCell style={{width: '50%', textAlign: "center"}}>نام</TableCell>
                            <TableCell style={{width: '50%', textAlign: "center"}}>نام خانوادگی</TableCell>
                            <TableCell style={{width: '50%', textAlign: "center"}}>شماره موبایل</TableCell>
                            <TableCell style={{width: '50%', textAlign: "center"}}>تاریخ ثبت نام</TableCell>
                            <TableCell style={{width: '50%', textAlign: "center"}}>عملیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{backgroundColor: '#161d26', color: 'white'}}
                            >

                                <TableCell sx={{borderRight: "solid 2px #272727", textAlign: "center"}}>
                                    <Checkbox/>
                                </TableCell>
                                <TableCell sx={{textAlign: "center"}}>{row.name}</TableCell>
                                <TableCell sx={{textAlign: "center"}}>{row.lastName}</TableCell>
                                <TableCell sx={{textAlign: "center"}}>{row.mobile}</TableCell>
                                <TableCell sx={{textAlign: "center"}}><FormatDate
                                    timestamp={row.createTime}/></TableCell>
                                <TableCell sx={{textAlign: "center"}}>
                                    <Stack direction="row" justifyContent="center">
                                        <UserInfoDialog user={row}/>
                                        <IconButton onClick={() => deletedUser(row.id)} sx={{color: '#E71868'}}>
                                            <DeleteOutlineOutlinedIcon/>
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>


        </>
    );
};

export default UserTable;
