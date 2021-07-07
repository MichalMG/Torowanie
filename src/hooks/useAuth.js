import { useContext } from "react";
import authContext from "../context/authContext";

export default function useAuth() {

  const userContext = useContext(authContext);

  const setUser = (user) => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
      userContext.login(user);
    } else {
      window.localStorage.removeItem('user');
      userContext.logout();
    }
  }

  return [userContext.user, setUser]
}