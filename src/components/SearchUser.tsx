import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import useStore from '../useStore.ts';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
      style={{ padding: '10px', margin: 0 }}
    >
      <TextField
        inputRef={ref}
        placeholder='جستجو'
        sx={{ maxWidth: '300px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '12px',
            backgroundColor: '#004D3F',
            color: 'white',
          },
        }}
      />
    </form>
  );
};

export default SearchInput;
