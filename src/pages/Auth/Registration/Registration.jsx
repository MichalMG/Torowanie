import AuthForm from "../AuthForm";
import axiosAuth from '../../../axiosAuth';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Registration() {

  const [user, setUser] = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const onSubmitFormHandler = async ({ email, password }) => {
    setErrorMessage('');
    try {
      const newUser = await axiosAuth.post('/accounts:signUp', {
        email,
        password,
        returnSecureToken: true
      })

      setUser({
        email: newUser.data.email,
        token: newUser.data.idToken,
        localId: newUser.data.localId,
      });
      console.log(newUser.data);
      history.push('/');
    } catch (ex) {
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
      />

    </div>
  )
}