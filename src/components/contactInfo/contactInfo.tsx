import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useViewContactQuery } from '../../features/contactApiSlice';
import './contactInfo.scss';

const ContactInfo = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useViewContactQuery(id!);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  return (
    <>
      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='info-wrapper'>
          <div className='info'>
            <div>
              <strong>ID: </strong>
              <span>{id}</span>
            </div>
            <div>
              <strong>Name: </strong>
              <span>{data && data.name}</span>
            </div>
            <div>
              <strong>Email: </strong>
              <span>{data && data.email}</span>
            </div>
          </div>

          <Link to='/'>
            <button className='btn'>Go Back</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
