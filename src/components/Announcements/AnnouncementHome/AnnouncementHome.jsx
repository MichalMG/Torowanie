import { useContext } from "react";
import { Link } from "react-router-dom";
import reducerContext from "../../../context/reducerContext";

export default function Announcement(props) {

  const { state } = useContext(reducerContext);

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-1">
      <div className="card" style={{ height: '100%' }}>
        <div className="rounded-top overflow-hidden">
          <div className="position-relative" style={{ width: '100%', height: '150px' }}>
            <div className="position-absolute " style={{ background: `url(${props.photo})`, backgroundPosition: 'center', backgroundSize: 'cover', top: 0, left: 0, right: 0, bottom: 0 }}></div>
          </div>
        </div>
        <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
          <div style={{ minHeight: '60px' }}>
            <p className="card-text mb-0 fw-bold">{props.title}</p>
          </div>
          <div>
            <p className="text-muted text-start mb-0"><small>Dodano: {props.date.slice(0, 10)}, {props.city}</small></p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <p className="fs-6 fw-bold mb-0">{parseInt(props.price).toLocaleString()} zł {props.negotiable ? <small className="text-muted fw-normal">, do negocjacji</small> : null}</p>

              </div>
              <Link to={`/announcement/${props.id}`} className={`btn btn-${state.theme} btn-sm ms-auto`}>Pokaż</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}