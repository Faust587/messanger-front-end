import axios from "axios";

export const useAuthorization = (): boolean => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return false;
  }

  axios.get(`${process.env.REACT_APP_API_URL}/refresh`, {withCredentials: true}).then(data => {
    console.log(data);
  });
  return true;
}
