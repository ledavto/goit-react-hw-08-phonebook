import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRegister } from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const authData = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  //Если залогинен то переходим на Home page
  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const dataRegister = {
      email: form.email.value,
      name: form.name.value,
      password: form.password.value,
    };

    dispatch(fetchRegister(dataRegister));

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
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            id="exampleFormControlInput2"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            id="exampleFormControlInput3"
            // onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};
