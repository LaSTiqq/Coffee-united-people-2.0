import axios from "axios";

const setAuthHeader = (token) => {
  const bearer = `Bearer ${token}`;
  axios.defaults.headers.common["Authorization"] = bearer;
};

export default setAuthHeader;
