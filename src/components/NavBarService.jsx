import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../features/Login/Logout";
import toast from "react-hot-toast";



 export function NavBarService() {
const [nav,setNav]=useState(false);
function handleNav(){
  setNav(!nav)
}
function toasts() {
  toast.success('Feature to be implemented soon');
  
  
}
  return (
    <>
    <nav className="  bg-white    flex justify-center       border-solid border-1    " >
      <ul className="hidden   -mb-4 mt-2 md:flex  lg:mb-0 lg:mt-0 lg:items-center lg:gap-6  font-thin    " >
      <Link to="/"> <img  className="h-20 -ml-6 -mt-2" src="/logo/mainLogo.png"/></Link>
        <li  onClick={toasts} className=" hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" ><Link to="">Learn</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" ><Link to="">Integrations</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" > <Link to="">Features</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500  focus:outline-none focus:ring   
      focus:ring-black-300 br rounded  px-4 py-1" ><Link to="">Industries</Link></li>
   
    <Logout/>
      </ul>
     
    </nav>
    <div className="flex justify-end ">
    <div  className="md:hidden  sm:block ease-in-out duration-500 mt-8" onClick={handleNav}> {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

 :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>}</div>
    </div>
    <Link to="/homepageservice"> <img  className="h-20 ml-4  md:hidden -mt-14" src="logo/mainLogo.png"/></Link>
    <div className={!nav ? '  sm:m-6  ease-in-out duration-500 lg:ml-6 ': 'hidden' }>

    <ul className="  mb-2   mt-2  lg:mb-0 lg:mt-0 lg:items-center md:hidden  font-thin w-64   " >
      
        <li className=" ml-6  hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1   "  ><Link to="">Learn</Link></li>
        <li className="ml-6 hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1   " ><Link to="">Integrations</Link></li>
        <li className=" ml-6 hover:bg-blue-500  focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1   " > <Link to="">Features</Link></li>
        <li className=" ml-6 hover:bg-blue-500 focus:outline-none focus:ring     
      focus:ring-black-300 br rounded  px-4 py-1" ><Link to="">Industries</Link></li>
    
             <Logout/>
             
      </ul>

    </div>
   </>
  );
}

export default NavBarService;
