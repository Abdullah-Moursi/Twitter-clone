import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaComment,
  FaHeart,
  FaLeaf,
  FaRegChartBar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Home = ({ infos }) => {
  const [avatar, setAvatar] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  useEffect(() => {
    axios
      .get("https://tinyfac.es/api/data")
      .then((response) => setAvatar(response.data));
  }, []);

  return (
    <div className="postss">
      {infos.map((tweet) => (
        <div key={tweet.content} className="tweet_container">
          <div className="postss__first">
            <div className="posts__first__img">
              {avatar.map((av) => (
                <img key={av.id} src={av.url} alt={av.first_name} />
              ))}
            </div>
            <div className="posts__first__name">
              <strong>{tweet.author}</strong>{" "}
              <FaRegCheckCircle className="verify" />
            </div>
            <div className="posts__first__username">
              @{tweet.author.replace(/\s/g, "_")} <span>6m</span>
            </div>
          </div>
          <div className="postss__details">
            <div className="postss__details__msg">{tweet.content}</div>
            <div className="postss__details__img">
              <img src={tweet.urlToImage} alt="post" />
            </div>
            <div className="reactions">
              <span>
                <FaComment className="re" />
                12
              </span>
              <span>
                <FaRegChartBar
                  style={isRetweeted && { color: "green" }}
                  onClick={() => setIsRetweeted(!isRetweeted)}
                  className="re"
                />
                52
              </span>
              <span>
                <FaHeart
                  style={isLiked && { color: "red" }}
                  onClick={() => setIsLiked(!isLiked)}
                  className="re"
                />
                2
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
  );
};

export default Home;
