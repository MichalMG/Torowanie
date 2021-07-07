import { useContext } from "react"
import { Redirect, Route } from "react-router-dom";
import authContext from "../../context/authContext"

export default function AuthRoute(props) {

  const { user } = useContext(authContext);

  return user ? <Route {...props} /> : <Redirect to="/" />
}