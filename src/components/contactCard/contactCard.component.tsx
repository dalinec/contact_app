import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../userTypes';
import user from '../../images/user.png';

interface IContactCard {
  contact: IUser;
  clickHandler: (id: any) => void;
}

const ContactCard: FC<IContactCard> = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className='item'>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>
        <Link to={`/view/${id}`}>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className='trash alternate outline icon'
        style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
        onClick={() => clickHandler(contact.id)}
      ></i>
      <Link to={`/edit/${id}`}>
        <i
          className='edit alternate outline icon'
          style={{ color: 'blue', marginTop: '7px' }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
