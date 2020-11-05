import React from 'react';
import './style.css';

const Pagination = (props) => {
  const { postsPerPage } = props;
  const { totalPosts } = props;
  const { paginate } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="text-center">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                type="button"
                onClick={() => {
                  paginate(number);
                }}
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
