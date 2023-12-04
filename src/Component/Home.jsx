import { useLoaderData } from "react-router-dom";
import News from "./News";

const Home = () => {
  const getNews = useLoaderData();
  return (
    <div>
      
      <h4>Total : {getNews.length}</h4>
      {getNews.map((news) => (
        <News key={news._id} news={news}></News>
      ))}
    </div>
  );
};

export default Home;
