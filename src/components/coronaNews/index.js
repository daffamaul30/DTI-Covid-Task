import React from 'react';
import Loading from '../loading';
import './style.css';

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

  console.log(news);
  const beritas = news.map((berita) => {
    return (
      <li
        key={berita.id}
        id={berita.id === news[news.length - 1].id ? 'last' : ''}
        className="list-data"
      >
        {convertISO(berita.date)}
        {berita.activity.map((activity) => {
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
  });

  return (
    <div className="news-container">
      {loading ? (
        <Loading />
      ) : (
        <ul className="list-group mb-4">{beritas}</ul>
      )}
    </div>
  );
};

export default CoronaNews;
