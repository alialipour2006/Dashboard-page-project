import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// import TableBody from "@mui/material/TableBody";

const NewUserTable = () => {

    return (
        <TableContainer   component={Paper} sx={{ width: '600px' , mx: 'auto' }} >
            <Table sx={{  width: 1 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>نام</TableCell>
                        <TableCell >نام خانوادگی</TableCell>
                        <TableCell >شماره موبایل</TableCell>
                        <TableCell >تاریخ ثبت نام</TableCell>
                        <TableCell >عملیات</TableCell>
                    </TableRow>
                </TableHead>
                {/*<TableBody>*/}
                {/*    {rows.map((row) => (*/}
                {/*        <TableRow*/}
                {/*            key={row.name}*/}
                {/*            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                {/*        >*/}
                {/*            <TableCell component="th" scope="row">*/}
                {/*                {row.name}*/}
                {/*            </TableCell>*/}
                {/*            <TableCell align="right">{row.calories}</TableCell>*/}
                {/*            <TableCell align="right">{row.fat}</TableCell>*/}
                {/*            <TableCell align="right">{row.carbs}</TableCell>*/}
                {/*            <TableCell align="right">{row.protein}</TableCell>*/}
                {/*        </TableRow>*/}
                {/*    ))}*/}
                {/*</TableBody>*/}
            </Table>
        </TableContainer>

    );
};




export default NewUserTable;