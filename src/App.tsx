import Home from './pages/home' 
import About from './pages/about'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Header from './components/navbar'
import Auth from './pages/auth'
import Admin from './pages/admin'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer/>
     <Header />
     <Routes>
           <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Auth />} >
          <Route path='/admin' element={<Admin />} />
          </Route>
   
      
      </Routes>
     
    </>
  )
}

export default App
