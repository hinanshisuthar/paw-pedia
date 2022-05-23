import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../services/logIn";
import { signUp } from "../services/signUp";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const navigate = useNavigate();

  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUp(email, password, firstName, lastName);
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
        navigate("/home");
      }
    } catch (error) {
      console.log("Error in signing user", error);
    }
  };

  const logInUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await logIn(email, password);
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
          navigate("/home");
        }
      } catch (error) {
        console.log("Error in logging user", error);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, logInUser, signUpUser, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
