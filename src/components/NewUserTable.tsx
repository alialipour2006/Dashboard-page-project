import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useStore from '../useStore.ts';
import TableBody from '@mui/material/TableBody';
import UserInfoDialog from './UserInfoDialog.tsx';
import FormatDate from '../lib/FormatDate.tsx';
import Checkbox from '@mui/material/Checkbox';
import { Stack, TableCell } from '@mui/material';

const NewUserTable = () => {
  const { user } = useStore();
  const sortedUsers = [...user].sort((a, b) => b.createTime - a.createTime).slice(0, 5);
  const tableCells = [
    {
      width: '20%',
      text: '#',
    },
    {
      width: '20%',
      text: 'نام',
    },
    {
      width: '50%',
      text: 'نام خانوادگی',
    },
    {
      width: '50%',
      text: 'شماره موبایل',
    },
    {
      width: '50%',
      text: 'تاریخ ثبت نام',
    },
    {
      width: '50%',
      text: 'عملیات',
    },
  ];

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: '100%', mx: 'auto', borderRadius: '12px' }}
      >
        <Table sx={{ width: 1, tableLayout: 'fixed' }} aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#004D3F', color: 'white' }}>
              {tableCells.map((item, index) => (
                <TableCell
                  key={index}
                  style={{ width: `&{item.width}‍‍`, textAlign: 'center' }}
                >
                  {item.text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map((row) => (
              <TableRow key={row.id} sx={{ color: 'textSecondary' }}>
                <TableCell sx={{ borderRight: 'solid 2px #272727', textAlign: 'center' }}>
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
