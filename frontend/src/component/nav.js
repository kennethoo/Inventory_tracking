import { RiDashboardFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";


function Nav({shipmetnTab,setshipmetnTab}){
    return (
        <div className="nav-box">
    <ul className="nax-bar">
        <li onClick={()=>{setshipmetnTab(false)}} className={`${shipmetnTab?"":"active"}`}> <RiDashboardFill/></li>
        <li onClick={()=>{setshipmetnTab(true)}} className={`${shipmetnTab?"active":""}`}><SiHomeassistantcommunitystore/></li>
       
    </ul>
        </div>
    )
}
export default Nav