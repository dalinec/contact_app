import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/header/header.component';
import ContactList from './components/contactList/contactList.component';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<ContactList />} />
        {/* <Route path='/add' element={<AddOrEditUser />} /> */}
        {/* <Route path='/idet/:id' element={<AddOrEditUser />} /> */}
        {/* <Route path='/view/:id' element={<UserInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
