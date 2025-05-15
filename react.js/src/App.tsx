import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Contact from  './pages/Contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Admin from './pages/Admin'
import Members from './pages/Members'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <hr />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />}>
       <Route path='/dashboard/admin' element={<Admin />} />
       <Route path='/dashboard/members' element={<Members />} />
       <Route path='/dashboard/users' element={<Users />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
