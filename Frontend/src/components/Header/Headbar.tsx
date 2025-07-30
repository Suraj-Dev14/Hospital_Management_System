import { ActionIcon, Button } from "@mantine/core"
import { IconBellRinging, IconLayoutSidebarLeftCollapseFilled } from "@tabler/icons-react"
import ProfileMenu from "./ProfileMenu"
import { Link } from "react-router-dom"


const Headbar = () => {
  return (
    <div className="bg-[#f0f3fb] shadow-lg px-6 w-full h-16 flex justify-between items-center">
      <ActionIcon variant="transparent"  size="lg" aria-label="Settings">
      <IconLayoutSidebarLeftCollapseFilled style={{ width: '90%', height: '90%' }} stroke={1.5} />
    </ActionIcon>
    <div className="flex gap-3 items-center">
      <Link to={"/login"}><Button>Login</Button></Link>
      <ActionIcon variant="transparent" size="md" aria-label="Settings">
      <IconBellRinging style={{ width: '90%', height: '90%' }} stroke={2} />
    </ActionIcon>
    <ProfileMenu />
    </div>
    
    </div>
  )
}

export default Headbar