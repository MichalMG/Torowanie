import { useState } from "react"
import validation from "../../helpers/validation";
import LoadingButton from "../../components/UI/LoadingButton/LoadingButton";

export default function AuthForm(props) {

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: '',
      rules: ['required', 'email'],
      isValid: false,
      errorMessage: ''
    },
    password: {
      value: '',
      rules: ['required', 'password'],
      isValid: false,
      errorMessage: ''
    }
  })

  const btnDisabledHandler = !(Object.values(form).filter(x => x.isValid).length === 2);

  const formSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await props.onSubmitFormHandler({
      email: form.email.value,
      password: form.password.value
    });
    setLoading(false);
  }

  const changeHandler = (value, type) => {
    const errorMessage = validation(value, form[type].rules)
    setForm({ ...form, [type]: { ...form[type], value, isValid: !errorMessage, errorMessage } });
  }

  return (
    <div className="card my-2 ">
      <div className="card-header">
        <p className="mb-0">{props.formName}</p>
      </div>
      <div className="card-body">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="email-login" className="form-label">Email</label>
            <input type="email" className={`form-control ${form.email.isValid ? 'is-valid' : ''} ${form.email.errorMessage ? 'is-invalid' : ''}`} id="email-login" placeholder="name@example.com" value={form.email.value} onChange={(e) => changeHandler(e.target.value, 'email')} />
            <div className="invalid-feedback">{form.email.errorMessage}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password-login" className="form-label">Hasło</label>
            <input type="password" className={`form-control ${form.password.isValid ? 'is-valid' : ''} ${form.password.errorMessage ? 'is-invalid' : ''}`} id="password-login" placeholder="******" value={form.password.value} onChange={(e) => changeHandler(e.target.value, 'password')} />
            <div className="invalid-feedback">{form.password.errorMessage}</div>
          </div>
          <LoadingButton title={props.btnTitle} loading={loading} disabled={btnDisabledHandler} />
        </form>
      </div>
    </div>
  )
}