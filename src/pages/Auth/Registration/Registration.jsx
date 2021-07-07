import AuthForm from "../AuthForm";
import axiosAuth from '../../../axiosAuth';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Registration() {

  const [user, setUser] = useAuth();
  const history = useHistory();

  const onSubmitFormHandler = async ({ email, password }) => {

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
      console.log(ex.response)
    }

  }

  return (
    <div className="container">

      <AuthForm
        onSubmitFormHandler={(form) => onSubmitFormHandler(form)}
        btnTitle="Zarejestruj"
        formName="Rejestracja"
      />

    </div>
  )
}