import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  return <div>{news.map(news=>{
    return (
        <div  key={news.title}>
            <p>{news.title}</p>
            <p>{news.abstract}</p>
            <p>{news.url}</p>
            <hr />
        </div>
    )
  })}</div>;
};

export default ListNews;