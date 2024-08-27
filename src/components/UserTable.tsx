import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Checkbox from '@mui/material/Checkbox';
import { IconButton, Stack } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import useStore from '../useStore.ts';
import UserDataManager from './UserDataManager.tsx';
import FormatDate from './FormatDate.tsx';
import SearchInput from './SearchUser.tsx';
import UserInfoDialog from './UserInfoDialog.tsx';

const UserTable = () => {
  const filteredUsers = useStore((state) => state.filteredUsers());
  const deletedUser = useStore((state) => state.deletedUsers);

  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handler for page change
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  // Handler for rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slicing the data according to the current page and rowsPerPage
  const paginatedUsers =
    rowsPerPage > 0
      ? filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : filteredUsers;

  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        sx={{ justifyContent: 'space-between', width: '100%', mx: 'auto' }}
      >
        <SearchInput />
        <UserDataManager />
      </Stack>

      <TableContainer
        component={Paper}
        sx={{ width: '100%', mx: 'auto', borderRadius: '12px' }}
      >
        <Table sx={{ width: 1, tableLayout: 'fixed' }} aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#004D3F', color: 'white' }}>
              <TableCell style={{ width: '20%', textAlign: 'center' }}>#</TableCell>
              <TableCell style={{ width: '50%', textAlign: 'center' }}>نام</TableCell>
              <TableCell style={{ width: '50%', textAlign: 'center' }}>نام خانوادگی</TableCell>
              <TableCell style={{ width: '50%', textAlign: 'center' }}>شماره موبایل</TableCell>
              <TableCell style={{ width: '50%', textAlign: 'center' }}>
                تاریخ ثبت نام
              </TableCell>
              <TableCell style={{ width: '50%', textAlign: 'center' }}>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((row) => (
              <TableRow key={row.id} sx={{ color: 'white' }}>
                <TableCell sx={{ borderRight: 'solid 1px #272727', textAlign: 'center' }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.name}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.lastName}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.mobile}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <FormatDate timestamp={row.createTime} />
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <Stack direction='row' justifyContent='center'>
                    <UserInfoDialog user={row} />
                    <IconButton onClick={() => deletedUser(row.id)} sx={{ color: '#E71868' }}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ backgroundColor: '#004D3F', color: 'white' }}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
