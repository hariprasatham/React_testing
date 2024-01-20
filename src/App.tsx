import React from 'react';
import './App.css';

import { MuiMode } from './components/mui/MuiMode';
import { AppProviders } from './providers/AppProvides';


function App() {

  return (
    <AppProviders>
    <div className="App">
      <MuiMode />
    </div>
    </AppProviders>
  );
}

export default App;
