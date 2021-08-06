import { useContext, useRef } from "react"
import reducerContext from "../../context/reducerContext"

const InputText = (props) => {
  return (
    <div className="mb-2">
      <label htmlFor={`${props.name}-${props.type}`} className="form-label">{props.label}</label>
      <input type={props.type} className={`form-control ${props.isValid ? 'is-valid' : ''} ${props.errorMessage ? 'is-invalid' : ''}`} id={`${props.name}-${props.type}`} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
      <div className="invalid-feedback">{props.errorMessage}</div>
    </div>
  )
}

const InputSelect = (props) => {
  return (
    <select className={`form-select ${props.isValid ? 'is-valid' : ''} ${props.errorMessage ? 'is-invalid' : ''}`} aria-label={props.name} value={props.value} onChange={e => props.onChange(e.target.value)}>
      {props.options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

const InputTextarea = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={`${props.name}-${props.type}`} className="form-label">{props.label}</label>
      <textarea className={`form-control ${props.isValid ? 'is-valid' : ''} ${props.errorMessage ? 'is-invalid' : ''}`} id={`${props.name}-${props.type}`} value={props.value} onChange={e => props.onChange(e.target.value)} rows="5"></textarea>
    </div>
  )
}

const InputRadio = (props) => {
  return (
    props.options.map(option => (
      <div key={option.value} className="form-check">
        <input className="form-check-input" type="radio" name={props.name} id={`${props.name}-${option.value}`} checked={props.value.includes(option.value)} onChange={e => props.onChange(e.target.value)} value={option.value} />
        <label className="form-check-label" htmlFor={`${props.name}-${option.value}`}>
          {option.label}
        </label>
      </div>
    ))
  )
}

const InputFile = props => {
  const fileRef = useRef();
  const { state } = useContext(reducerContext);
  const fileHandler = e => {
    e.preventDefault();
    props.onChange(fileRef.current.files[0]);
  }

  return (
    <div className="input-group">
      <input accept="image/*" ref={fileRef} type="file" className="form-control" id="inputGroupFile04" aria-describedby={`input-${props.name}`} aria-label="Upload" required />
      {props.loading ? (<button className={`btn btn-${state.theme}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Ładowannie...
      </button>
      ) : (<button className={`btn btn-outline-${state.theme} ${props.invalidMessage ? 'is-invalid' : ''} ${props.validMessage ? 'is-valid' : ''}`} type="button" id={`input-${props.name}`} onClick={fileHandler}>Dodaj</button>
      )}
      <div className="valid-feedback">{props.validMessage}</div>
      <div className="invalid-feedback">{props.invalidMessage}</div>
    </div>
  )
}

const InputCheckbox = props => {

  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id={`announcement-${props.name}`} checked={props.value} onChange={() => props.onChange(!props.value)} />
      <label className="form-check-label" htmlFor={`announcement-${props.name}`}>{props.label}</label>
    </div>
  )
}

export default function Input(props) {

  switch (props.type) {
    case 'text':
      return <InputText {...props} />
    case 'checkbox':
      return <InputCheckbox {...props} />
    case 'email':
      return <InputText {...props} type="email" />
    case 'number':
      return <InputText {...props} type="number" />
    case 'select':
      return <InputSelect {...props} />
    case 'textarea':
      return <InputTextarea {...props} />
    case 'radio':
      return <InputRadio {...props} />
    case 'file':
      return <InputFile {...props} />
    default:
      return;
  }

}