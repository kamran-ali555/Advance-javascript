import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section className='flex justify-center items-center gap-5 text-medium py-7'>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/About" > About </NavLink>
        <NavLink to="/Contact" > Contact </NavLink>
        <NavLink to="/Dashboard" > Dashboard </NavLink>
      </section>
    </div>
  )
}

export default Navbar
