import { useContext } from "react"
import reducerContext from "../../../context/reducerContext"

export default function LoadingButton(props) {

  const { state } = useContext(reducerContext);

  return (
    props.loading
      ? (<button className={`btn btn-${state.theme}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Ładowannie...
      </button>)
      : <button className={`btn btn-${state.theme}`} disabled={props.disabled ? props.disabled : false}>{props.title}</button>
  )
}