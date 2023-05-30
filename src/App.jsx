import { Route, Routes } from 'react-router'
import SignInPage from './pages/LoginPages/SignInPage'
import SignUpPage from './pages/LoginPages/SignUpPage'
import axios from 'axios';

function App() {
  axios.defaults.headers.common['Authorization'] = 'rxa6U7iiGtZlTg8Zu5jI5qK4';

  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/cadastro' element={<SignUpPage />} />
      </Routes>
    </>
  )
}

export default App
