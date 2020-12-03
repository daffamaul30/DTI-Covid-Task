import React from 'react';
import Pagination from 'pagination-react-hooks';
import Loading from '../loading';
import './style.css';
import { Link } from 'react-router-dom';

const CoronaNews = (props) => {
  const { news } = props;
  const { loading } = props;

  const convertISO = (tanggal) => {
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const days = [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
      'Minggu',
    ];
    const date = new Date(tanggal);
    let day = date.getDay() - 1;
    const year = date.getFullYear();
    let month = months[date.getMonth()];
    let dt = date.getDate();

    if (tanggal.includes('T17')) {
      dt = dt - 1;
      day = day - 1;
    }
    if (day < 0) {
      day = 6;
    }
    if (dt < 10) {
      dt = '0' + dt;
    }

    return days[day] + ', ' + dt + ' ' + month + ' ' + year;
  };
  const beritas = (value) => {
    console.log(value);

    // return <p>HAI</p>
    return (
      <li key={value.id} className="list-data">
        <Link to={`/info Covid-19/${value.date}`}>{convertISO(value.date)}</Link>
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
