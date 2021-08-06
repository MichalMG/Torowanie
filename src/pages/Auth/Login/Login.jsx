import AuthForm from "../AuthForm";
import axiosAuth from '../../../axiosAuth';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

export default function Login() {

  const [user, setUser] = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useWebsiteTitle("Logowanie");

  const onSubmitFormHandler = async ({ email, password }) => {
    setErrorMessage('');
    setLoading(true);
    try {
      const loginUser = await axiosAuth.post('/accounts:signInWithPassword', {
        email,
        password
      })
      setUser(loginUser.data);
      setLoading(false);
      history.push('/');

    } catch (ex) {
      setLoading(false);
      const error = ex.response.data.error.message;
      if (error === "EMAIL_NOT_FOUND") {
        setErrorMessage("Brak adresu email w bazie");
      } else if (error === "INVALID_PASSWORD") {
        setErrorMessage("Nieprawidłowe hasło");
      } else if (error === "USER_DISABLED") {
        setErrorMessage("Konto użytkownika zostało zdezaktywowane, prosimy o kontakt");
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
        btnTitle="Zaloguj"
        formName="Logowanie"
        loading={loading}
      />

    </div>
  )
}