import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';
// import { addUserAction } from '../../redux/user/userSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const listCont = useSelector(state => state.user.contacts.items);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const newCont = {
      name: e.target.name.value,
      phone: e.target.number.value,
    };

    if (newCont.name) {
      // const contObj = { ...newCont };
      // Массив имен из объекта
      const arrName = [];
      for (const contact of listCont) {
        arrName.push(contact.name);
      }
      //Проверка на наличие уже такого имени
      const arrNameLowerCase = arrName.map(elem => elem.toLowerCase());
      if (arrNameLowerCase.includes(newCont.name.toLowerCase())) {
        alert(`${newCont.name} is already in contacts`);
        return;
      }
      dispatch(addContact(newCont));
    }

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
