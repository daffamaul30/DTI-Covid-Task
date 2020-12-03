import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components';
import app from '../../services/firebase';
import 'firebase/database';
import './style.css';

const DetailDate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { dateId } = params;

  useEffect(() => {
    setIsLoading(true);
    document.title = 'Covid-19 - Info Corona';
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      const filteredByDate = firebaseNews.data.filter((news) => {
        return news.date === dateId;
      });
      setNews(filteredByDate);

      setIsLoading(false);
    });
  }, [dateId]);

  return (
    <div className="news-container">
      {!isLoading && news.length > 0 ? (
        <NewsItem data={news[0]} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailDate;

const NewsItem = ({ data }) => {
  console.log(data);
  const { date, activity, url } = data;
  return (
    <h4>{date}</h4>
    // <></>
  );
};
