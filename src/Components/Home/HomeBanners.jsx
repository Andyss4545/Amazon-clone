import React from "react";
import { Link } from "react-router-dom";
import "../Home/HomeBanners.css";
import Footer from "../Footer/Footer";

const HomeBanners = () => {
  return (
    <React.Fragment>
      <div className="banners">
        <div className="bannersRow">
          <div className="bannersRow_col1">
            <div className="bannersRow_title">
              <h3>Top Deal</h3>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/61G9uqSnvBL._AC_SY230_.jpg"
              alt=""
            />
            <Link className="links" to={"/all-products"}>
              Sea all deals
            </Link>
          </div>

          <div className="bannersRow_col2">
            <div className="bannersRow_title">
              <h3>Early Black Friday deals are here</h3>
            </div>

            <div className="bannersRow_content">
              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_ComputersAndAccessories_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
                  alt=""
                />
                <p>Kitchen</p>
              </div>
              <div className="bannersRow_Content1">
                <img
                  src="  https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_Kitchen_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
                  alt=""
                />
                <p>Computers & more</p>
              </div>

              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_HealthAndPersonalCare_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
                  alt=""
                />
                <p>Personal Care</p>
              </div>

              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_HomeImprovement_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
                  alt=""
                />
                <p>Home Inprovement</p>
              </div>
            </div>

            <Link className="links" to={"/all-products"}>
              Sea all deals
            </Link>
          </div>

          <div className="bannersRow_col3">
            <div className="bannersRow_title">
              <h3>Gaming Accesories</h3>
            </div>

            <div className="bannersRow_content">
              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                  alt=""
                />
                <p>Headsets</p>
              </div>
              <div className="bannersRow_Content1">
                <img
                  src="  https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                  alt=""
                />
                <p>Keyboards</p>
              </div>

              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                  alt=""
                />
                <p>Computer mice</p>
              </div>

              <div className="bannersRow_Content1">
                <img
                  src=" https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                  alt=""
                />
                <p>Chairs</p>
              </div>
            </div>

            <Link className="links" to={"/all-products"}>
              Shop all deals
            </Link>
          </div>

          <div className="bannersRow_col4">
            <div className="bannerRow_SignIn">
              <h3>Sign in for the best experience</h3>
              <Link class to={"/login"}>
                Sign In
              </Link>
            </div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="bannersRow">
          <div className="bannersRow_col1">
            <div className="bannersRow_title">
              <h3>Top Deal</h3>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/41zRGuBtAML._AC_SY230_.jpg"
              alt=""
            />
            <Link className="links" to={"/all-products"}>
              Sea all deals
            </Link>
          </div>

          <div className="bannersRow_col2">
            <div className="bannersRow_title">
              <h3>Top Deal</h3>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/61G9uqSnvBL._AC_SY230_.jpg"
              alt=""
            />
            <Link className="links" to={"/all-products"}>
              Sea all deals
            </Link>
          </div>

          <div className="bannersRow_col3">
            <div className="bannersRow_title">
              <h3>Gaming Accesories</h3>
            </div>

            <img
              src="https://m.media-amazon.com/images/I/41zRGuBtAML._AC_SY230_.jpg"
              alt=""
            />
            <Link className="links" to={"/all-products"}>
              Shop all deals
            </Link>
          </div>

          <div className="bannersRow_col4 row2_last">
            <div className="bannersRow_title">
              <h3>Gaming Accesories</h3>
            </div>

            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
              alt=""
            />
            <Link className="links" to={"/all-products"}>
              Shop all deals
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default HomeBanners;
