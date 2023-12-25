import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLogin } from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  //Если залогинен то переходим на Home page
  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const dataLogin = {
      email: form.email.value,
      password: form.password.value,
    };

    dispatch(fetchLogin(dataLogin));

    form.reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container w-25 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            id="exampleFormControlInput2"
            // onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          SignUp
        </button>
      </div>
    </form>
  );
};
