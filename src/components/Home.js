import React from "react";
import {
  FaComment,
  FaHeart,
  FaLeaf,
  FaRegChartBar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Home = ({ infos }) => {
  return (
    // <div className="tweets">
    //   {infos.map((tweet) => (
    //     <div className="tweet_container" key={tweet.content}>
    //      <h4>{tweet.author}</h4>
    //       <p>{tweet.content}</p>
    //     </div>
    //   ))}
    // </div>


    <div className="postss">
      {infos.map((tweet) => (
      <div className="tweet_container">
         <div className="postss__first">
      <div className="posts__first__img">
        <img
          src="https://pbs.twimg.com/profile_images/1150716997254209536/M7gkjsv5_normal.jpg"
          alt="profile img"
        />
      </div>
      <div className="posts__first__name">
        <strong>{tweet.author}</strong> <FaRegCheckCircle className="verify" />
      </div>
      <div className="posts__first__username">
        @{tweet.author} <span>6m</span>
      </div>
    </div>
    <div className="postss__details">
      <div className="postss__details__msg">
      {tweet.content}
      </div>
      <div className="postss__details__img">
        <img
          src="https://pbs.twimg.com/card_img/1415374535243743233/3VPghsy-?format=jpg&name=small"
          alt="post"
        />
      </div>
      <div className="reactions">
        <span>
          <FaComment className="re" />
          12
        </span>
        <span>
          <FaRegChartBar className="re" />
          52
        </span>
        <span>
          <FaHeart className="re" />2
        </span>
        <span>
          <FaLeaf className="re" />
          856
        </span>
      </div>
    </div>
      </div>
   ))}
  </div>



  )
};

export default Home;
