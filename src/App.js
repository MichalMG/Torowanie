import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Category from './components/Category/Category';
import Announcements from './components/Announcements/AnnouncementsHome';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Search from './pages/Search/Search';
import Tickets from './pages/Trackdays/Trackdays';
import Tires from './pages/Tires/Tires';
import Motorcycles from './pages/Motorcycles/Motorcycles';
import Login from './pages/Auth/Login/Login';
import NewAnnouncement from './pages/NewAnnouncement/NewAnnouncement';
import AuthContext from './context/authContext';
import { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import ReducerContext from './context/reducerContext';
import Registration from './pages/Auth/Registration/Registration';
import AuthRouteTrue from './components/AuthRoute/AuthRouteTrue';
import AuthRouteFalse from './components/AuthRoute/AuthRouteFalse';
import ProfileAnnouncements from './pages/Profile/Announcements/ProfileAnnouncements';
import Announcement from './pages/Announcement/Announcement';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const header = (
    <>
      <Navbar />
    </>
  )

  const content = (
    <Switch>
      <AuthRouteTrue path="/newAnnouncement" component={NewAnnouncement} />
      <AuthRouteTrue path="/profile/announcements/:localId?" component={ProfileAnnouncements} />
      <AuthRouteFalse path="/registration" component={Registration} />
      <AuthRouteFalse path="/login" component={Login} />
      <Route path="/motorcycles">
        <Searchbar />
        <Motorcycles />
      </Route>
      <Route path="/announcement/:id" component={Announcement} />
      <Route path="/tires" >
        <Searchbar />
        <Tires />
      </Route>
      <Route path="/tickets" >
        <Searchbar />
        <Tickets />
      </Route>
      <Route path="/search/:term?">
        <Searchbar />
        <Search />
      </Route>
      <Route exact path="/">
        <>
          <Searchbar />
          <Category />
          <Announcements />
        </>
      </Route>
    </Switch>

  )

  const footer = <Footer />

  return (
    <AuthContext.Provider value={{
      user: state.user,
      login: (user) => dispatch({ type: 'login', user }),
      logout: () => dispatch({ type: 'logout' })
    }}>
      <ReducerContext.Provider value={{
        state,
        dispatch
      }}>
        <Router>
          <Layout
            header={header}
            content={content}
            footer={footer}
          />
        </Router>
      </ReducerContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
