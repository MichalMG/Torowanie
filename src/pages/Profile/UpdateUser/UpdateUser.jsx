import AuthForm from "../../Auth/AuthForm";
import useAuth from "../../../hooks/useAuth";
import axiosAuth from '../../../axiosAuth';
import { useHistory } from "react-router-dom";
import { useState } from "react";

const UpdateUser = () => {

  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const updateUserData = async (newUserData) => {
    setLoading(true);
    try {
      const newUser = await axiosAuth.post('/accounts:update/', {
        idToken: auth.token,
        email: newUserData.email,
        password: newUserData.password,
        returnSecureToken: true
      });
      setAuth(newUser.data);
      setLoading(false);
      history.push('/');
    } catch (ex) {
      setLoading(false);
      console.log(ex.response);
    }
  }

  return (
    <>
      <div className="container">
        <AuthForm
          loading={loading}
          email={auth.email}
          formName="Aktualizuj dane użytkownika"
          btnTitle="Aktualizuj"
          onSubmitFormHandler={(newUserData) => updateUserData(newUserData)} />
      </div>
    </>
  )
}

export default UpdateUser;