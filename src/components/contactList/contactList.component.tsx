import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../features/contactApiSlice';

import ContactCard from '../contactCard/contactCard.component';
import './contactList.style.scss';

const ContactList = () => {
  const { data, isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!');
    }
  }, [error]);

  const handleDelete = async (id: string) => {
    await deleteContact(id);
    toast.success('Contact deleted successfully');
  };

  const renderContactList = data?.map((contact) => {
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
          <button className='btn btn2'>Add Contact</button>
        </Link>
      </h2>
      {isLoading ? (
        <div className='loading-main'>Loading...</div>
      ) : (
        <div>{renderContactList}</div>
      )}
    </div>
  );
};

export default ContactList;
