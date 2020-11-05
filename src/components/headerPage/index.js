import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listMenu = ['Home', 'Info Covid-19'];
  return (
    <div className="header text-center">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Header;
