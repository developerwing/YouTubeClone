import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./_header.scss";

function Header({ handleToggleSidebar }) {
  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form onSubmit={null}>
        <input type="text" placeholder="Search" onChange={(e) => null} />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="https://yt3.ggpht.com/yti/AJo0G0mpEntvqmXTeCRoQOjUpDQM_P9QEwgvDa6V8LtF=s88-c-k-c0x00ffffff-no-rj-mo" alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
