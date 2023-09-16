import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/nav';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='App'>
        <NavBar />
      </div>
    </React.Fragment>
  );
}
