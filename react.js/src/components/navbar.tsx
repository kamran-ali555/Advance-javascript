import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <section className='flex justify-center items-center gap-5 text-medium py-7'>
        <Link to="/" > Home </Link>
        <Link to="/About" > About </Link>
        <Link to="/Contact" > Contact </Link>
        <Link to="/Dashboard" > Dashboard </Link>
      </section>
    </div>
  )
}

export default navbar
