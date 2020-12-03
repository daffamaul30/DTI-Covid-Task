import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';
import './style.css';

const Header = () => {
  const listMenu = ['Home', 'Product', 'Info Covid-19'];
  return (
    <div className="header text-center">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        <button type="button" className="logout btn btn-danger">
          Logout
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
