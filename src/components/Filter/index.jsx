import { useDispatch } from 'react-redux';
import { filterStrAction } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterStrAction(e.target.value));
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Find contact by name
        <input
          type="text"
          name="filter"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
