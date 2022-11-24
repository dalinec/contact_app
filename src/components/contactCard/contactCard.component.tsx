import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/userTypes';
import user from '../../images/user.png';
import './contactCard.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface IContactCard {
  contact: IUser;
  clickHandler: (id: any) => void;
}

const ContactCard: FC<IContactCard> = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <>
      <div className='item'>
        <Link to={`/contacts/${id}`} className='link'>
          <div className='user-info-container'>
            <img className='image' src={user} alt='user' />
            <div className='info-container'>
              <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
              </div>
            </div>
          </div>
        </Link>
        <div className='icon-container'>
          <FontAwesomeIcon
            className='fa'
            icon={faTrash}
            style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
            onClick={() => clickHandler(contact.id)}
          />

          <Link to={`/edit/${id}`}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className='fa'
              style={{ color: 'blue', marginTop: '7px' }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
