import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../features/contactApiSlice';

import ContactCard from '../contactCard/contactCard.component';

const ContactList = () => {
  const { data, isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!');
    }
  }, [error]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

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
