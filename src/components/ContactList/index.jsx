import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { useNavigate } from 'react-router-dom';

export const ContactList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const items = useSelector(state => state.user.contacts.items);
  const isLoading = useSelector(state => state.user.contacts.isLoading);
  const error = useSelector(state => state.user.contacts.error);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
    !isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate, dispatch]);

  const filter = useSelector(state => {
    return state.filter.filter;
  });

  const deleteCont = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="container w-75 mx-auto">
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Please wait...</b>}
      <h2>Contacts</h2>
      <ul className="list-group">
        {items
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(elem => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={elem.id}
            >
              <label>
                {elem.name} - {elem.number}
              </label>

              <button
                className="btn btn-primary"
                type="button"
                onClick={() => deleteCont(elem.id)}
              >
                Del
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
