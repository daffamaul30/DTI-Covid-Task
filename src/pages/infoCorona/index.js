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
    document.title = 'DTI Task - Info Corona';
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data.reverse());

      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="mb-3 text-center">Corona News</h2>
      <CoronaNews news={news} loading={isLoading} />
    </div>
  );
};

export default InfoCorona;
