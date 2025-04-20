import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.line}>
          <FaUser className={css.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={css.line}>
          <FaPhone className={css.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
