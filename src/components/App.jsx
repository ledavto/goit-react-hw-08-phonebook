import { ContactList } from './ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SignupForm } from './SignupForm';
import { RegisterForm } from './RegisterForm';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import Home from 'page/Home';

//rafce

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="*" element={<p>Not found</p>}></Route>
      </Route>
    </Routes>
  );
};
