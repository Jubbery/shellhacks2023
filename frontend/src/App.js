import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/Nav';
import Search from './components/Search/Search';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='App'>
        <NavBar />
        <Search />
      </div>
    </React.Fragment>
  );
}
