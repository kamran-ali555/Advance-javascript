import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col justify-center items-center ">
        <Outlet />
        </div>
    </div>
  )
}

export default Dashboard
