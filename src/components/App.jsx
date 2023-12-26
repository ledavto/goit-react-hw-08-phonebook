import { ContactList } from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SignupForm } from './SignupForm';
import { RegisterForm } from './RegisterForm';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import Home from 'page/Home';
import { RestrictedRoute } from './UserMenu/RestrictedRoute';
import { PrivateRoute } from './UserMenu/PrivateRoute';

//rafce

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignupForm />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/signup" component={<ContactList />} />
          }
        />
        <Route path="*" element={<p>Not found</p>}></Route>
      </Route>
    </Routes>
  );
};
