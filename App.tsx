import * as React from 'react';
import Router from './app/src/Router';
import { AuthProvider } from './app/src/context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
