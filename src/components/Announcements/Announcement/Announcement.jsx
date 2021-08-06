import { Link } from "react-router-dom";
import { useContext } from "react";
import reducerContext from "../../../context/reducerContext";

export default function Announcement(props) {

  const { state } = useContext(reducerContext);


  return (
    <div className="py-2">
      <div className="card mb-3 bg-white overflow-hidden" >
        <div className="row g-0">
          <div className="col-12 col-md-4 col-lg-3 order-1">
            <div className="position-relative" style={{ width: '100%', height: '200px' }}>
              <div style={{ background: `url(${props.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9 my-2 my-md-0  order-2" >
            <div className="card-body d-flex flex-column flex-md-row justify-content-between" style={{ height: '100%' }}>
              <div className=" d-flex flex-column justify-content-between ">
                <p className="card-text mb-0"><span className="fw-bold">{props.title}</span></p>
                <p className="card-text mb-0"><small className="text-muted">{props.city}, {props.date}</small></p>
              </div>
              <div className="col-12 col-md-2 d-flex flex-md-column justify-content-between  align-items-center align-items-md-end order-3">
                <p className="mb-0 text-end"><span className="fw-bold">{parseInt(props.price).toLocaleString()} zł</span></p>
                <Link to={`/announcement/${props.id}`} className={`btn btn-${state.theme} btn-sm`} >Pokaż</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



{/* <div className="py-2">
  <div className="card mb-3 bg-white">
    <div className="row g-0">
      <div className="col-4">
        <img src={props.photo} className="img-fluid rounded-start p-3" style={{ width: '100%', height: 'auto' }} alt="..." />
      </div>
      <div className="col-8">
        <div className="row card-body d-flex justify-content-between" style={{ height: '100%' }}>
          <div className="col-8 col-sm-9 d-flex flex-column justify-content-between">
            <p className="card-text mb-0"><span className="fw-bold">{props.title}</span></p>
            <p className="card-text mb-0"><small className="text-muted">{props.city}, {props.date}</small></p>
          </div>
          <div className="col-4 col-sm-3 d-flex flex-column justify-content-between">
            <p className="mb-0 text-end"><span className="fw-bold">{parseInt(props.price).toLocaleString()} zł</span></p>
            <Link to={`/announcement/${props.id}`} className={`btn btn-${state.theme} btn-sm ms-auto`} >Pokaż</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}