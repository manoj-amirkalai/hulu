import React from "react";
import {
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
  FlashOn,
} from "@mui/icons-material";
import "./header.css";
import hulu from "./../../pics/hulu.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon active" >
          <Home />
          <p>home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img src={hulu} alt="logo"/>
    </div>
  );
};

export default Header;
