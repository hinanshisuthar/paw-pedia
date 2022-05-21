import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import "./LandingPage.css";

const LandingPage = () => {
  const { sideMenu, setSideMenu, category } = useData();
  useEffect(() => setSideMenu(false), [sideMenu]);

  return (
    <div className="wrapper flex-col-sb">
      <div className="responsive-img-container hero-img-con">
        <img
          src="../../../assets/hero.png"
          alt="hero-img"
          className="hero-img"
        />
      </div>
      <Link to="/home">
        <button className="btn btn-primary">Explore</button>
      </Link>
      <div className="categories-con video-card-con flex-row-se p-2">
        {category.map(({ _id, categoryName, img }) => (
          <div key={_id} className="cat-div responsive-img-container p-sm">
            <img
              src={img}
              alt={categoryName}
              className="img-responsive cat-img"
            />
            <h6 className="text-center">{categoryName}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LandingPage };
