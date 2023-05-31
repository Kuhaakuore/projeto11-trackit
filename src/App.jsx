import { Route, Routes } from 'react-router'
import SignUpPage from './pages/LoginPages/SignUpPage'
import axios from 'axios';
import { useState } from 'react';
import LoginPage from './pages/LoginPages/LoginPage';

function App() {
  axios.defaults.headers.common['Authorization'] = 'rxa6U7iiGtZlTg8Zu5jI5qK4';

  const [token, setToken] = useState('');

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage setToken={setToken}/>} />
        <Route path='/cadastro' element={<SignUpPage />} />
      </Routes>
    </>
  )
}

export default App
