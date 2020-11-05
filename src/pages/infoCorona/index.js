import React, { useEffect, useState } from 'react';
import { CoronaNews } from '../../components';
import app from '../../services/firebase';
import 'firebase/database';
import './style.css';

const InfoCorona = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    document.title = 'Covid-19 - Info Corona';
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data.reverse());

      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-success mb-3 text-center">Corona News</h2>
      <CoronaNews news={news} loading={isLoading} />
    </div>
  );
};

export default InfoCorona;
