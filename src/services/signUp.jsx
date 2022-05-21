import axios from "axios";

const signUp = (email, password, firstName, lastName) => {
  return axios.post("api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
};

export {signUp}