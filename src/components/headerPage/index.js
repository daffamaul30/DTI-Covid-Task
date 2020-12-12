import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';
import './style.css';

const Header = () => {
  const listMenu = ['Home', 'Product', 'Info Covid-19'];
  const logout = () => {
    deleteCookie('tokenn');
    window.location.replace('/product');
  };

  return (
    <div className="header text-center">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name.toLowerCase()}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        <button
          type="button"
          className="logout btn btn-danger"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
