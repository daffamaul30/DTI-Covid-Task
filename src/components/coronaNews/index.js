import React from 'react';
import Pagination from 'pagination-react-hooks';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import './style.css';
import Func from '../../utils/baseFunction';

const CoronaNews = (props) => {
  const { news } = props;
  const { loading } = props;

  const beritas = (value) => {
    console.log(value);

    // return <p>HAI</p>
    return (
      <li key={value.id} className="list-data">
        <Link to={`/info Covid-19/${value.date}`}>
          {Func.convertISO(value.date)}
        </Link>
        {value.activity.map((activity) => {
          return (
            <ul key={activity.url}>
              <li id="title">
                <a href={activity.url}>{activity.title}</a>
              </li>
              {activity.desc ? <p id="desc">{activity.desc}</p> : <p> </p>}
            </ul>
          );
        })}
      </li>
    );
  };

  return (
    <div className="news-container">
      {loading ? (
        <Loading />
      ) : (
        <ul className="list-group mb-4">
          <Pagination
            data={news}
            Show={beritas}
            displayNumber="5"
            previousText="&laquo;"
            nextText="&raquo;"
          />
        </ul>
      )}
    </div>
  );
};

export default CoronaNews;
