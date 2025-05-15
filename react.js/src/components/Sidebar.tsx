import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="w-[200px] h-[80vh] border-r border-black">
        {/* const location = user.Location() */}
        {/* console.log(location.pathname); */}

        
      <ul  className="flex flex-col">
        <Link className="py-4 px-2 text-xl font-bold border-b hover:bg-gray-300" to='/Dashboard/Admin'>Admin</Link>
        <Link className="py-4 px-2 text-xl font-bold border-b hover:bg-gray-300" to='/Dashboard/Users'>Users</Link>
        <Link className="py-4 px-2 text-xl font-bold border-b hover:bg-gray-300" to='/Dashboard/Members'>Members</Link>
      </ul>
    </div>
  )
}

export default Sidebar
