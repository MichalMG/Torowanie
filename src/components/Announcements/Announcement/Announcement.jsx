import { useContext } from "react"
import reducerContext from "../../../context/reducerContext"

export default function Announcement(props) {

  const { state } = useContext(reducerContext);

  return (
    <div className="py-2">
      <div className="card mb-3 bg-white">
        <div className="row g-0">
          <div className="col-3 col-md-2">
            <img src={props.photo} className="img-fluid rounded-start p-3" style={{ width: '100%', height: 'auto' }} alt="..." />
          </div>
          <div className="col-9 col-md-10">
            <div className="row card-body d-flex justify-content-between" style={{ height: '100%' }}>
              <div className="col-8 col-sm-9 d-flex flex-column justify-content-between">
                <p className="card-text mb-0">{props.title}</p>
                <p className="card-text mb-0">{props.description}</p>
                <p className="card-text mb-0"><small className="text-muted">{props.city}, {props.date}</small></p>
              </div>
              <div className="col-4 col-sm-3 d-flex flex-column justify-content-between">
                <p className="mb-0 text-end">{props.price} zł</p>
                <button className={`btn btn-${state.theme} ms-auto`} >Pokaż</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}