import {
  AiOutlineMenu,
  BsSearch,
  BsSunFill,
  VscAccount,
} from "../utilities/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="p-1 nav-div">
      <div className="flex-row-sb">
        <AiOutlineMenu size={22} className="icon mr-sm font menu-icon" />
        <div class="responsive-img-container flex-row-sb logo-div mr-1">
          <img
            src="../assets/paw-pedia-logo.svg"
            alt="paw-pedia-logo"
            class="img-responsive"
          />
          <h3 className="font">Paw Pedia</h3>
        </div>
        <div className="search search-div ml-auto flex-row-sb">
          <BsSearch className="m-sm font" size={18} />
          <input type="text" className="search-box text-rg" placeholder="Search" />
        </div>
        <div className="flex-row-sb ml-auto">
          <BsSunFill size={22} className="icon mx-sm font" />
          <VscAccount size={22} className="icon mx-sm font" />
        </div>
      </div>
      <div className="search search-div-btm flex-row-sb my-sm">
        <BsSearch className="m-sm font" size={18} />
        <input type="text" className="search-box text-rg" placeholder="Search" />
      </div>
    </div>
  );
};

export { Navbar };
