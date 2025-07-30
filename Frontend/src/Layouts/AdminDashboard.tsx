import { Outlet } from 'react-router-dom'
import Headbar from '../components/Header/Headbar'
import Sidebar from '../components/Sidebar/Sidebar'

const AdminDashboard = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col ml-64">
          <Headbar />
          <Outlet />
        </div>
      </div>
  )
}

export default AdminDashboard