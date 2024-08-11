import { useContext } from "react";
import AuthContext from "../../contexts/authContext.js";
import useForm from '../../hooks/useForm.js';
const registerFormKeys = {

  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {

    [registerFormKeys.Email]: "",
    [registerFormKeys.Password]: "",
    [registerFormKeys.ConfirmPassword]: "",
  });
  return (
    <div className='register-form'>
      <h1>Register</h1>
      <form className='register-details' onSubmit={onSubmit}>
   
        <div>
          <label htmlFor='email'>Email:</label> <br />
          <input
            type='text'
            id='email'
            name='email'
            onChange={onChange}
            values={values[registerFormKeys.Email]}
          />
          {/* { <!-- <p className={styles.errorMessage}>{errors.age}</p> -->} */}
        </div>

        <div>
          <label htmlFor='password'>Password:</label> <br />
          <input
            type='password'
            id='password'
            name='password'
            onChange={onChange}
            values={values[registerFormKeys.Password]}
          />
        </div>
        <div>
          <label htmlFor='confirm-password'>Confirm password:</label> <br />
          <input
            type='password'
            id='confirm-password'
            name='confirm-password'
            onChange={onChange}
            values={values[registerFormKeys.ConfirmPassword]}
          />
        </div>
        <div>
          <button className='button' type='submit' >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
