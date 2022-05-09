import { useAuth } from "../../context/auth-context";
import "../../components/utilities/helper.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useEffect } from "react";

const Profile = () => {
  const { token, setToken, user, setUser } = useAuth();
  const { firstName, lastName, email } = user;
  const { sideMenu, setSideMenu } = useData();
  useEffect(() => setSideMenu(true), [sideMenu]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    setToken("");
    setUser();
    setTimeout(() => console.log("logged out"), 1000);
    navigate("/");
  };

  return (
    <div className="wrapper center">
      <div className="wide-con auth-con signup-con p-1 flex-col-sb">
        <h1 className="text-center">User Profile</h1>
        <div className="credentials-con flex-col-sb-start width-100 p-sm">
          <h4>Data</h4>
          <div className="flex-row-sb width-100 py-sm">
            <div className="flex-col-sb-start">
              <p>Full Name</p>
              <p>Registered Email</p>
            </div>
            <div className="flex-col-sb-start">
              <p>
                {firstName} {lastName}
              </p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="flex-col-sb-start btn-con width-100">
          <h4 className="p-sm">Settings</h4>
          <button
            className="btn btn-primary text-regular text-capitalize m-sm width-100"
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export { Profile };
