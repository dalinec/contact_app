import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/header/header.component';
import ContactList from './components/contactList/contactList.component';
import AddOrEditContact from './components/addOrEditContact/addOrEditContact.component';
import ContactInfo from './components/contactInfo/contactInfo';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path='/add' element={<AddOrEditContact />} />
        <Route path='/edit/:id' element={<AddOrEditContact />} />
        <Route path='/contacts/:id' element={<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
