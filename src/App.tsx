import React from 'react';
import './index.css';
import Grafico from './Grafico';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px'
    }}>
      <Grafico />
    </div>
  );
}

export default App;
