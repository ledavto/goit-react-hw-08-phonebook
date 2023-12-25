import { useDispatch, useSelector } from 'react-redux';
import { fetchLogOut } from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  const userToken = useSelector(state => state.auth.token);

  return (
    <div className="d-flex justify-content-end">
      <div className="d-flex align-items-center">
        <span>
          Welcome, <b>{userName}</b>
        </span>
      </div>
      <button
        className="nav-item nav-link"
        type="button"
        onClick={() => dispatch(fetchLogOut(userToken))}
      >
        Logout
      </button>
    </div>
  );
};
