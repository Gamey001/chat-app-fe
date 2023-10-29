import React, { useState } from 'react'
import Home from './Home/Home';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import AddUser from './AddUser/AddUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditUser from './EditUser/EditUser';
import Modal from './Modal/Modal';
import { createPortal } from "react-dom";
import UserProfile from './UserProfile/UserProfile';
import Chat from './Chat/Chat';

require('bootstrap')

const App = () => {
  const [displayProfile, setDisplayProfile] = useState()

  return (
    <div className='bg-light' style={{ textAlign: 'center', minHeight: '100vh', padding: '5em 3%' }}>
      <Router>
        {displayProfile && createPortal(<Modal><UserProfile displayProfile={displayProfile} setDisplayProfile={() => { setDisplayProfile(undefined) }} /></Modal>, document.getElementById('modalContainer'))}
        <Routes>
          <Route exact path="/" element={<Home setDisplayProfile={(profile) => setDisplayProfile(profile)} />} />
          <Route exact path="/register" element={<AddUser />} />
          <Route exact path="/conversation/:receiptId" element={<Chat />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;