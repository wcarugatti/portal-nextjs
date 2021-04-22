import React from "react";

// import { Container } from './styles';

export default function VerticalNavBar({sidebar, toggleSidebar}) {

  return (
    <div className={"vertical-nav " + (sidebar ? "active" : "")} id="sidebar">
      <div className="py-4 px-3 mb-4 profile">
        <div className="media-body text-center">
          <img src="images/man.svg" height="90" width="auto" />
          <h4 className="mb-0 media-content">Rahul Yaduvanshi</h4>
          <p className=" mb-0 media-sub-content">UI/UX Developer</p>
        </div>
      </div>

      <ul className="nav flex-column  mb-0">
        <li className="nav-item active">
          <a href="#" className="nav-link ">
            <img src="images/home.svg" height="15" width="auto" />
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img
              src="images/favourite.svg"
              height="15"
              width="auto"
            />
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img
              src="images/telegram.svg"
              height="15"
              width="auto"
            />
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="images/image.svg" height="15" width="auto" />
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img
              src="images/instagram.svg"
              height="15"
              width="auto"
            />
            Instagram
          </a>
        </li>
      </ul>
      <div id="sidebarCollapse" className={sidebar ? "rotate" : ""} onClick={()=>toggleSidebar()} type="button">
        <img src="images/back.svg" />
      </div>
    </div>
  );
}
