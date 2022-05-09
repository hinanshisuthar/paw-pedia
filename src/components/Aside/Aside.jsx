import {
  AiFillHome,
  AiFillLike,
  AiFillPlayCircle,
  AiOutlineHistory,
  MdOutlineWatchLater,
} from "../utilities/icons";
import "./Aside.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside-con flex-col-sb">
      <NavLink
        to="/home"
        style={(isActive) => ({
          backgroundColor: isActive ? "var(--light-grey)" : "",
        })}
      >
        <div className="flex-row-sb-start p-1 side-option-div">
          <AiFillHome size={23} className="icon m-sm" />
          <h4 className="text-regular p-sm">Home</h4>
        </div>
      </NavLink>
      <NavLink
        to="/playlist"
        style={(isActive) => ({
          backgroundColor: isActive ? "var(--light-grey)" : "",
        })}
      >
        <div className="flex-row-sb-start p-1 side-option-div">
          <AiFillPlayCircle size={23} className="icon m-sm" />
          <h4 className="text-regular p-sm">My Playlist</h4>
        </div>
      </NavLink>
      <NavLink
        to="/history"
        style={(isActive) => ({
          backgroundColor: isActive ? "var(--light-grey)" : "",
        })}
      >
        <div className="flex-row-sb-start p-1 side-option-div">
          <AiOutlineHistory size={23} className="icon m-sm" />
          <h4 className="text-regular p-sm">History</h4>
        </div>
      </NavLink>
      <NavLink
        to="/liked"
        style={(isActive) => ({
          backgroundColor: isActive ? "var(--light-grey)" : "",
        })}
      >
        <div className="flex-row-sb-start p-1 side-option-div">
          <AiFillLike size={23} className="icon m-sm" />
          <h4 className="text-regular p-sm">Liked Videos</h4>
        </div>
      </NavLink>
      <NavLink
        to="/watchlater"
        style={(isActive) => ({
          backgroundColor: isActive ? "var(--light-grey)" : "",
        })}
      >
        <div className="flex-row-sb-start p-1 side-option-div">
          <MdOutlineWatchLater size={23} className="icon m-sm" />
          <h4 className="text-regular p-sm">Watch Later</h4>
        </div>
      </NavLink>
    </div>
  );
};

export { Aside };
