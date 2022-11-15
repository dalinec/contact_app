import { useState, useEffect, FC, FormEvent, SyntheticEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  useViewContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from '../../features/contactApiSlice';

const initialState = {
  name: '',
  email: '',
};

const AddOrEditContact: FC = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const { name, email } = formValue;
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, error } = useViewContactQuery(id!);

  useEffect(() => {
    if (error && id) {
      toast.error('Something went wrong');
    }
  }, [error, id]);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      if (data) {
        setFormValue({ ...data });
      }
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, data]);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    let { name, value } = e.target as HTMLInputElement;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name && !email) {
      toast.error('Provide a value to each field');
    } else {
      if (!editMode) {
        await addContact(formValue);
        navigate('/');
        toast.success('Contact added successfully!');
      } else {
        await updateContact(formValue);
        navigate('/');
        setEditMode(false);
        toast.success('Contact updated successfully!');
      }
    }
  };

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <input
          type='submit'
          value={editMode ? 'Update' : 'Add'}
          className='ui button blue'
        ></input>
        <Link to='/'>
          <button className='ui button blue btn'>Go Back</button>
        </Link>
      </form>
    </div>
  );
};

export default AddOrEditContact;
