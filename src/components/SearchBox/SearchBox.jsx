import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="searchInput">
        Find contacts by name
      </label>
      <input
        id="searchInput"
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}


