import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavLink className="nav-item nav-link" to="/">
        Home
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )} */}
    </div>
  );
};
