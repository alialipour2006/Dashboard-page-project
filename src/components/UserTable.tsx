import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import useStore from "../useStore.ts";
import TableBody from "@mui/material/TableBody";
import DataManager from "./DataManager.tsx";
import UserInfoPopOver from "./UserInfoDialog.tsx";
import FormatDate from "./FormatDate.tsx";
import SearchInput from "./SearchUser.tsx";
import {Stack} from "@mui/material";


const UserTable = () => {
    const filteredUsers = useStore((state) => state.filteredUsers());


    return (
        <>
            <Stack>
                <SearchInput/>
                <DataManager/>
            </Stack>
            <TableContainer component={Paper} sx={{width: '800px', mx: 'auto'}}>
                <Table sx={{width: 1, tableLayout: 'fixed'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: '40%'}}>نام</TableCell>
                            <TableCell style={{width: '40%'}}>نام خانوادگی</TableCell>
                            <TableCell style={{width: '40%'}}>شماره موبایل</TableCell>
                            <TableCell style={{width: '40%'}}>تاریخ ثبت نام</TableCell>
                            <TableCell style={{width: '40%'}}>عملیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map((row) => (
                            <TableRow
                                key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell><FormatDate timestamp={row.createTime}/></TableCell>
                                <TableCell><UserInfoPopOver user={row}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    );
};


export default UserTable;