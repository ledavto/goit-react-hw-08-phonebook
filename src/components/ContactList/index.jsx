import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const items = useSelector(state => state.user.contacts.items);
  // console.log('items', items);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(state => {
    // console.log(state);
    return state.filter.filter;
  });

  const deleteCont = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="list-group">
      {items
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(elem => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={elem.id}
          >
            <label>
              {elem.name} - {elem.phone}
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
  );
};
