

import NavBar from "../components/NavBarService"
// import GoogleCalendar from "./GoogleCalendar"
import Sidebar from "./Sidebar"
// import Events from "./Events"
import { Outlet } from "react-router-dom"

 export function HomepageService() {
    return (
        <>
        <NavBar/>
        
        <div className=" md:grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] ">
        <Sidebar/>
        {/* <GoogleCalendar/> */}
        <main>
          
        
        <Outlet/>
        </main>
        </div>
       
        </>
    )
}

export default HomepageService
