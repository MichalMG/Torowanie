import AuthForm from "../AuthForm";
import axiosAuth from '../../../axiosAuth';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Login() {

  const [user, setUser] = useAuth();
  const history = useHistory();

  const onSubmitFormHandler = async ({ email, password }) => {
    try {
      const loginUser = await axiosAuth.post('/accounts:signInWithPassword', {
        email,
        password
      })

      setUser({
        email: loginUser.data.email,
        token: loginUser.data.idToken,
        localId: loginUser.data.localId,
      });
      history.push('/');

    } catch (ex) {
      console.log(ex.response)
    }
  }

  return (
    <div className="container">

      <AuthForm
        onSubmitFormHandler={(form) => onSubmitFormHandler(form)}
        btnTitle="Zaloguj"
        formName="Logowanie"
      />

    </div>
  )
}