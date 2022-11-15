import React from "react";
import "../Home/Home.css";
import Slider from "../Slider/Slider";
import HomeBanners from "../Home/HomeBanners";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <div className="home_banner">
          {/* <img
          src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
          alt=""
        /> */}

          <Slider />
        </div>
      </div>
      <div className="home2">
        <HomeBanners />
      </div>
    </React.Fragment>
  );
}

export default Home;
