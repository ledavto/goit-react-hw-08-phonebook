import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/user/selectors';

export default function ContactPage() {
  //   const isLoading = useSelector(state => state.contacts.isLoading);
  //   const error = useSelector(selectError);

  return (
    <>
      <div className="container w-75 mx-auto">
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {/* {isLoading && !error && <b>Please wait...</b>} */}
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
}
