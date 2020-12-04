import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';
import './style.css';

const Header = () => {
  const listMenu = ['Home', 'Product', 'Info Covid-19'];
  const history = useHistory();
  const logout = () => {
    // Cookie.remove('tokenn');
    history.push('/login');
    // window.location.replace('/login');
  };

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
