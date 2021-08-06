import { Link } from 'react-router-dom';

export default function Element(props) {

  return (
    <div className="col-12 col-sm-4 d-flex flex-column align-items-center justify-content-center">
      <Link to={props.path} className="btn shadow-none link-secondary">
        <div className="rounded-circle overflow-hidden  d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }} >
          <img src={props.image} alt="" style={{ minWidth: '100%', minHeight: '100%' }} />
        </div>
        <h5 className="my-2">{props.title}</h5>
      </Link>
    </div>
  )
}