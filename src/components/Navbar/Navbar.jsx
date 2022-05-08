import { useState } from "react";
import {
  AiFillHome,
  AiFillLike,
  AiFillPlayCircle,
  AiOutlineHistory,
  AiOutlineMenu,
  BsSearch,
  BsSunFill,
  MdOutlineWatchLater,
  VscAccount,
} from "../utilities/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="p-1 nav-div">
      <div className="flex-row-sb">
        <AiOutlineMenu
          size={22}
          className="icon mr-sm font menu-icon"
          onClick={() => setMenu(!menu)}
        />
        <div className="responsive-img-container flex-row-sb logo-div mr-1">
          <img
            src="../assets/paw-pedia-logo.svg"
            alt="paw-pedia-logo"
            className="img-responsive"
          />
          <h3 className="font">Paw Pedia</h3>
        </div>
        <div className="search search-div ml-auto flex-row-sb">
          <BsSearch className="m-sm font" size={18} />
          <input
            type="text"
            className="search-box text-rg"
            placeholder="Search"
          />
        </div>
        <div className="flex-row-sb ml-auto">
          <BsSunFill size={22} className="icon mx-sm font" />
          <VscAccount size={22} className="icon mx-sm font" />
        </div>
      </div>
      <div className="search search-div-btm flex-row-sb my-sm">
        <BsSearch className="m-sm font" size={18} />
        <input
          type="text"
          className="search-box text-rg"
          placeholder="Search"
        />
      </div>
      {menu && (
        <div className="aside-con-responsive">
          <Link to="/">
            <div className="flex-row-sb-start p-1 side-option-div">
              <AiFillHome size={23} className="icon m-sm" />
              <h4 className="text-regular p-sm">Home</h4>
            </div>
          </Link>
          <Link to="/playlist">
          <div className="flex-row-sb-start p-1 side-option-div">
            <AiFillPlayCircle size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">My Playlist</h4>
          </div>
          </Link>
          <Link to="/history">
          <div className="flex-row-sb-start p-1 side-option-div">
            <AiOutlineHistory size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">History</h4>
          </div>
          </Link>
          <Link to="/liked">
          <div className="flex-row-sb-start p-1 side-option-div">
            <AiFillLike size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">Liked Videos</h4>
          </div>
          </Link>
          <Link to="/watchlater">
          <div className="flex-row-sb-start p-1 side-option-div">
            <MdOutlineWatchLater size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">Watch Later</h4>
          </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Navbar };
