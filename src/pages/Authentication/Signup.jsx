import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import "./Auth.css";

const Signup = () => {
  const { token, signUpUser } = useAuth();
  const [signupCredentials, setSignupCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    (async () => {
      signUpUser(
        signupCredentials.email,
        signupCredentials.password,
        signupCredentials.firstName,
        signupCredentials.lastName
      );
    })();
  }, [
    signupCredentials.email,
    signupCredentials.password,
    signupCredentials.firstName,
    signupCredentials.lastName,
  ]);

  if (token) {
    setTimeout(() => {
      console.log("signed in");
    }, 1000);
  }

  return (
    <div className="wrapper center">
      <div className="auth-con signup-con p-1 flex-col-sb">
        <h1>Sign Up</h1>
        <div className="credentials-con flex-col-sb">
          <label htmlFor="input" className="width-100">
            Firstname
            <input
              id="input"
              type="text"
              name="firstName"
              className="input-box p-sm my-sm"
              placeholder="Rachel"
              value={signupCredentials.firstName}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Lastname
            <input
              type="text"
              name="lastName"
              className="input-box p-sm my-sm"
              placeholder="Green"
              value={signupCredentials.lastName}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Email
            <input
              type="text"
              name="email"
              className="input-box p-sm my-sm"
              placeholder="rachelgreen@gmail.com"
              value={signupCredentials.email}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Password
            <input
              type="password"
              name="password"
              className="input-box p-sm my-sm"
              placeholder="********"
              value={signupCredentials.password}
              onChange={inputHandler}
            />
          </label>
        </div>
        <div>
          <div className="flex-col-sb btn-con">
            <button className="btn btn-primary text-regular text-capitalize m-sm width-100">
              Sign Up
            </button>
          </div>
          <Link to="/signup">
            <h5 className="create-account p-sm">
              Already have an account? Log In
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Signup };
