import AuthForm from "../AuthForm";
import axiosAuth from '../../../axiosAuth';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

export default function Registration() {

  const [user, setUser] = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  useWebsiteTitle("Rejestracja");

  const onSubmitFormHandler = async ({ email, password }) => {
    setErrorMessage('');
    setLoading(true);
    try {
      const newUser = await axiosAuth.post('/accounts:signUp', {
        email,
        password,
        returnSecureToken: true,
        name: "Jan"
      })

      console.log(newUser);

      setUser(newUser.data);
      setLoading(false);
      history.push('/');
    } catch (ex) {
      setLoading(false);
      const error = ex.response.data.message;
      if (error === "EMAIL_EXISTS") {
        setErrorMessage("Adres email jest już używany przez inne konto");
      } else if (error === "TOO_MANY_ATTEMPTS_TRY_LATER") {
        setErrorMessage("Konto użytkownika zostało zablokowane z powodu zbyt wielu prób nieudanego logowania, proszę spróbować ponownie później");
      } else {
        setErrorMessage("Wystąpił problem z logowaniem. Spróbuj później");
      }
    }

  }

  return (
    <div className="container">
      {errorMessage ? <div className="alert alert-danger my-2 text-center">{errorMessage}</div> : null}
      <AuthForm
        onSubmitFormHandler={(form) => onSubmitFormHandler(form)}
        btnTitle="Zarejestruj"
        formName="Rejestracja"
        loading={loading}
      />

    </div>
  )
}