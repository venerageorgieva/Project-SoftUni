import { useContext } from "react";
import useForm from '../../hooks/useForm.js'
import AuthContext from "../../contexts/authContext.js";
const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });
  return (
    <div className='login-form'>
      <h1>Login</h1>
      <form className='login-details' onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>Email:</label> <br />
          <input
            type='text'
            id='email'
            name={LoginFormKeys.Email}
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
        </div>

        <div>
          <label htmlFor='password'>Password:</label> <br />
          <input
            type='password'
            id='password'
            name={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
        </div>

        <div>
          <button className='button' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
