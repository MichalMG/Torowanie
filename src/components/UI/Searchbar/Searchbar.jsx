import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import reducerContext from "../../../context/reducerContext";

export default function Searchbar() {

  const [term, setTerm] = useState('');
  const history = useHistory();
  const { state } = useContext(reducerContext);

  const formHandler = e => {
    e.preventDefault();
    history.push(`/search/${term}`);

  }

  return (
    <section className="bg-light py-4">
      <div className="container">
        <form onSubmit={formHandler}>
          <div className="p-3 d-flex input-group">
            <span className="input-group-text" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input type="text" className="form-control shadow-none" placeholder="wyszukaj..." value={term} onChange={(e) => setTerm(e.target.value)} />
            <button type="submit" className={`btn btn-${state.theme} ms-2`}>Wyszukaj</button>
          </div>
        </form>
      </div>
    </section>
  )
}