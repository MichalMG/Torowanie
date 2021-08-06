import { useContext } from "react";
import authContext from "../context/authContext";

export default function useAuth() {

  const userContext = useContext(authContext);

  const setUser = (user) => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify({
        email: user.email,
        token: user.idToken,
        localId: user.localId,
      }));
      userContext.login({
        email: user.email,
        token: user.idToken,
        localId: user.localId,
      });
    } else {
      window.localStorage.removeItem('user');
      userContext.logout();
    }
  }

  return [userContext.user, setUser]
}