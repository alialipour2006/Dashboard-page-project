import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import useStore from "../useStore.ts";
import TableBody from "@mui/material/TableBody";
import UserInfoDialog from "./UserInfoDialog.tsx";
import FormatDate from "./FormatDate.tsx";
import Checkbox from "@mui/material/Checkbox";
import {Stack} from "@mui/material";

const NewUserTable = () => {
    const {user} = useStore();
    const sortedUsers = [...user].sort((a, b) => b.createTime - a.createTime).slice(0, 5);


    return (
        <>
            <TableContainer component={Paper} sx={{width: '90%', mx: 'auto', borderRadius: "20px"}}>
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
                        {sortedUsers.map((row) => (
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


export default NewUserTable;