import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import reducerContext from "../../context/reducerContext";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {

  const [user, setUser] = useAuth();
  const history = useHistory();
  const { state } = useContext(reducerContext);

  const logoutHandler = () => {
    setUser(null);
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div>
          <NavLink className="navbar-brand" to="/">#Torowanie</NavLink>
        </div>
        <div>
          <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {user
                ? (<>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill me-2" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      Mój profil
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="my-4">Nazwa użytkownika</li>
                      <li>
                        <NavLink className="dropdown-item" to={`/profile/announcements/${user.localId}`}>Ogłoszenia</NavLink>
                      </li>
                      <li><a className="dropdown-item" href="#">Ustawienia</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button className="dropdown-item" onClick={logoutHandler}>Wyloguj</button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`btn btn-outline-${state.theme} ms-3`} to="/newAnnouncement">Dodaj ogłoszenie</NavLink>
                  </li>
                </>)
                : (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Zaloguj</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/registration">Rejestracja</NavLink>
                  </li>
                </>)}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}