import React from 'react';
import { render } from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';

// optional cofiguration
const options = {
  position: 'bottom left',
  timeout: 5000,
  // offset: '30px',
  transition: 'scale',
};

const Root = () => {
  return (
    <AlertProvider template={AlertTemplate} options={options}>
      <App />
    </AlertProvider>
  );
};

render(<Root />, document.getElementById('root'));
