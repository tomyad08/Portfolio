import React from "react";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import MenuNav from "../Component/MenuNav";
import Portfolio from "../Component/Portfolio";
import Working from "../Component/Working";

const HomePage = () => {
  return (
    <div>
      <div style={{ background: "linear-gradient(purple, #FF78F0" }}>
        <div
          className="container-fluid"
          style={{ position: "fixed", backgroundColor: "purple" }}
        >
          <MenuNav />
        </div>
        <Banner />
      </div>

      <Working />
      <Portfolio />
      <Footer />
      <div
        style={{
          position: "fixed",
          bottom: "5px",
          right: "80px",
          width: "50px",
        }}
      >
        <a href={`https://wa.me/6285772390154`}>
          <img src="./assets/WA.png" alt=" " width="100px" />
        </a>
      </div>
    </div>
  );
};
export default HomePage;
