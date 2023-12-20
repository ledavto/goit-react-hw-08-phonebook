import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const listCont = useSelector(state => state.user.contacts.items);

  // Викликаємо операцію
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

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
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          id="exampleFormControlInput1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Telephone
        </label>
        <input
          type="tel"
          name="number"
          required
          className="form-control"
          id="exampleFormControlInput2"
          // onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add contact
      </button>
    </form>
  );
};
