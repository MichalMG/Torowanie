import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import getAllAnnouncements from "../../../helpers/getAllAnnouncements";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axiosDB from '../../../axiosDB';

export default function ProfileAnnouncements() {

  const [user] = useAuth();
  const [myAnnouncements, setMyAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserAnnouncements = async () => {
    try {
      setLoading(true);
      const allAnnouncements = await getAllAnnouncements();
      const announceWithId = [...allAnnouncements].filter(x => x.userId === user.localId);
      setMyAnnouncements(announceWithId);
      setLoading(false);
    } catch (ex) {
      console.log(ex.respone);
      setLoading(false);
    }
  }

  const removeHandler = async id => {
    try {
      await axiosDB.delete(`/announcements/${id}.json`);
      const newArray = [...myAnnouncements].filter(x => x.id !== id);
      setMyAnnouncements(newArray);
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    getUserAnnouncements();
  }, [])

  return (
    <div className="container my-2">
      {loading ? <Spinner /> : (myAnnouncements.length !== 0 ? (
        <>
          <h3>Moje ogłoszenia:</h3>
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr className="table-secondary ">
                  <th className="text-start" scope="col" style={{ width: '75%' }}>Tytuł</th>
                  <th scope="col" style={{ width: '10%', }}>Promowane</th>
                  <th scope="col" style={{ width: '15%', minWidth: '150px' }}>Zarządzaj</th>
                </tr>
              </thead>
              <tbody>
                {myAnnouncements.map(announce => (
                  <tr key={announce.id}>
                    <td className="text-start">{announce.title}</td>
                    <td>{announce.promoted === "1" ? <span className="badge bg-success">Tak</span> : <span className="badge bg-secondary">Nie</span>}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">Edytuj</button>
                      <button className="btn btn-danger btn-sm" onClick={() => removeHandler(announce.id)}>Usuń</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-warning">Aktualnie brak ogłoszeń</div>
          <div className="text-center">
            <NavLink className="btn btn-outline-info " to="/newAnnouncement">Dodaj ogłoszenie</NavLink>
          </div>
        </>
      )
      )}
    </div>
  )
}