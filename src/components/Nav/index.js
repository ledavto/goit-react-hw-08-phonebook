import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className="d-flex justify-content-start">
      <NavLink className="nav-item nav-link" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="nav-item nav-link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
