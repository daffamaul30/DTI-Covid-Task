import React, { useEffect } from 'react';
import './style.css';

const Home = () => {
  useEffect(() => {
    document.title = 'DTI Task - Home';
  });
  return (
    <div className="text-center pageHome-wrapper">
      <div className="centered">Telkom DTI Task</div>
    </div>
  );
};

export default Home;
