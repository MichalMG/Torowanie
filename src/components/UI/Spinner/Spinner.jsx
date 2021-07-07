import { useContext } from "react"
import reducerContext from "../../../context/reducerContext"

export default function Spinner() {

  const { state } = useContext(reducerContext);

  return (
    <div className="text-center py-4">
      <div className={`spinner-grow bg-${state.theme}`} style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}