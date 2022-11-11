import React from "react";
import "../Home/Home.css";
import Product from "../Product/Product";
import Slider from "../Slider/Slider";

function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        {/* <img
          src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
          alt=""
        /> */}

        <Slider />
      </div>

      <div className="home_row">
        {/* create a poducts component and add --> Product id, title, price, rating, image */}
        <Product
          id="jx8NrJdg"
          title="The Lean Startup: How constant Innovation Creates Employment"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41qUrJxKkmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />

        <Product
          id="U97rDQ07"
          title="Marcy Multifunction Steel Home Gym"
          price={155}
          rating={4}
          image="https://m.media-amazon.com/images/I/71h3CfiBamL._AC_SX569_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="TvikSAci"
          title="GOD'S END-TIME ARMY: A Heart Cry for Revival in the Church"
          price={12.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/41WeDRmA2wL._SX331_BO1,204,203,200_.jpg"
        />

        <Product
          id="XVrVOq6D"
          title="Controller Gear The Legend of Zelda Baseball Cap Adjustable Hat Collection"
          price={21.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81L8UONqlgL._AC_UX522_.jpg"
        />

        <Product
          id="bBBGNVsA"
          title="Blink Outdoor and Indoor wireless, HD security cameras with two-year battery life."
          price={239.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/51rRaFXmCOL._SX425_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="P0yqxIkG"
          title="SAMSUNG Electronics UN32M4500A 32-Inch 720p Smart LED TV (2017 Model)"
          price={209}
          rating={4}
          image="https://m.media-amazon.com/images/I/81rBDhZuu4L._AC_SX425_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
