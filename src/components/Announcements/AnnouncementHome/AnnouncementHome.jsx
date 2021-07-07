import { useContext } from "react";
import { Link } from "react-router-dom";
import reducerContext from "../../../context/reducerContext";

export default function Announcement(props) {

  const { state } = useContext(reducerContext);

  return (
    <div className="col-3 my-1">
      <div className="card" style={{ height: '100%' }}>
        <div className="position-relative overflow-hidden" style={{ width: '100%', height: '150px' }}>
          <div className="position-absolute img-thumbnail" style={{ background: `url(${props.photo})`, backgroundPosition: 'center', backgroundSize: 'cover', top: 0, left: 0, right: 0, bottom: 0 }}></div>
          {/* <img src={props.photo} alt="" style={{ minWidth: '100%', minHeight: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> */}
        </div>
        <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
          <p className="card-text">{props.title}</p>
          <div>
            <p className="text-muted text-end">{props.city}, {props.date}</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge bg-secondary fs-6">{props.price}</span>
              <Link to={`/announcement/${props.id}`} className={`btn btn-${state.theme} ms-auto`} >Pokaż</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}