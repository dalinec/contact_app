import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import ContactCard from '../contactCard/contactCard.component';

const data = [
  {
    id: Math.random(),
    name: 'Adam Marcus',
    email: 'adam123@gmail.com',
  },
  {
    id: Math.random(),
    name: 'Tom Cruise',
    email: 'tom@gmail.com',
  },
  {
    id: Math.random(),
    name: 'James Bond',
    email: 'james@gmail.com',
  },
];

const ContactList = () => {
  const handleDelete = async (id: any) =>
    toast.success('Contact deleted successfully');

  const renderContactList = data.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={handleDelete}
        key={contact.id}
      />
    );
  });

  return (
    <div className='main'>
      <h2>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right'>Add Contact</button>
        </Link>
      </h2>
      <div id='list' className='ui celled list'>
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
