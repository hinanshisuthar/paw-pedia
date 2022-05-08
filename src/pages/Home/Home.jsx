import { Categories } from "../../components/Categories/Categories";
import "./Home.css";
import { BsThreeDotsVertical } from "../../components/utilities/icons";

const Home = () => {
  return (
    <div className="video-listing">
      <div className="categories-con">
        <Categories />
      </div>
      <div className="video-card-con p-1 ml-sm">
        <div className="responsive-img-container video-card">
          <img
            src="https://i.ytimg.com/vi/wtH-hdOF1uA/maxresdefault.jpg"
            alt="hello"
            className="img-responsive"
          />
          <div className="flex-row-sb">
            <div className="p-1 flex-col-sb-start">
              <h3>Video Name</h3>
              <p>Video Creator</p>
            </div>
            <BsThreeDotsVertical className="option-icon" size={25} />
          </div>
        </div>
        <div className="responsive-img-container video-card">
          <img
            src="https://i.ytimg.com/vi/wtH-hdOF1uA/maxresdefault.jpg"
            alt="hello"
            className="img-responsive"
          />
          <div className="flex-row-sb">
            <div className="p-1 flex-col-sb-start">
              <h3>Video Name</h3>
              <p>Video Creator</p>
            </div>
            <BsThreeDotsVertical className="option-icon" size={25} />
          </div>
        </div>
        <div className="responsive-img-container video-card">
          <img
            src="https://i.ytimg.com/vi/wtH-hdOF1uA/maxresdefault.jpg"
            alt="hello"
            className="img-responsive"
          />
          <div className="flex-row-sb">
            <div className="p-1 flex-col-sb-start">
              <h3>Video Name</h3>
              <p>Video Creator</p>
            </div>
            <BsThreeDotsVertical className="option-icon" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
