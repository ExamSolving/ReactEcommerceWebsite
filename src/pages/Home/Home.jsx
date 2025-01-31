import React from "react";
import Nav from "../../components/Nav/Nav";
import bg from "../../assets/bg0.gif";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero-img">
          <img src={bg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
