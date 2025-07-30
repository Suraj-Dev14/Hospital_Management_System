import { Avatar, Text } from "@mantine/core"
import { IconCalendarCheck, IconHeartbeat, IconLayoutGrid, IconMoodHeart, IconStethoscope, IconVaccine } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

const links = [{
  name: "Dashboard",
  url: "/dashboard",
  icon: <IconLayoutGrid stroke={1.5}/>
},
{
  name: "Doctors",
  url: "/doctors",
  icon: <IconStethoscope stroke={1.5}/>
},
{
  name: "Patients",
  url: "/patients",
  icon: <IconMoodHeart stroke={1.5}/>
},
{
  name: "Appointments",
  url: "/appointments",
  icon: <IconCalendarCheck stroke={1.5}/>
},{
  name: "Pharmacy",
  url: "/pharmacy",
  icon: <IconVaccine stroke={1.5}/>
}]

const Sidebar = () => {
  return (
    <div className="bg-[#212529] fixed w-64 h-screen overflow-y-auto flex flex-col gap-7 items-center">
      <div className="fixed z-[500] bg-[#212529] text-[#32b9a9] flex gap-1 items-center py-3">
        <IconHeartbeat />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>

      <div className="flex flex-col gap-4 mt-20">
      <div className="flex flex-col gap-1 items-center">
        <div className="p-1 bg-white rounded-full shadow-xl">
        <Avatar size="xl" alt='It.s me' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
      </div>
        <span className="font-medium text-[#f0f3fb]">John Doe</span>
        <Text c="dimmed" size="xs" className="text-[#f0f3fb]">Admin</Text>
      </div>
      <div className="flex flex-col gap-3">
        {
          links.map((link) => (
            <NavLink key={link.name} to={link.url} className={({ isActive }) => isActive ? "bg-[#32b9a9] px-4 py-5 flex gap-2 items-center font-medium rounded-lg text-[#212529]" : "px-4 py-5 flex gap-2 items-center hover:bg-gray-100 hover:shadow-md rounded-lg text-[#f0f3fb] hover:text-[#212529] transition-colors duration-200"}>
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </NavLink>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Sidebar