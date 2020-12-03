import React from 'react';
import { LoginModal } from '../components';

const Login = () => {
  return (
    <div className="text-center pageHome-wrapper centered">
      <h3>
        Please Login
        <br />
        <LoginModal />
      </h3>
    </div>
  );
};

export default Login;
