import React, { useEffect, useState } from 'react';
import { CoronaNews, Pagination } from '../../components';
import app from '../../services/firebase';
import 'firebase/database';
import './style.css';

const InfoCorona = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currenPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  // Change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success mb-3 text-center">Corona News</h2>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
      <CoronaNews news={currenPosts} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
    </div>
  );
};

export default InfoCorona;
