import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchLogOut } from '../../redux/auth/auth-operations';

export const UserMenu = () => {
const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  const userToken = useSelector(state => state.auth.token);

  return (
    <div className="d-flex justify-content-end">
       <p >Welcome, {userName}</p>
      <button className="nav-item nav-link" type="button" onClick={() => dispatch(fetchLogOut(userToken))}>
        Logout
      </button>
    </div>
  );
};
