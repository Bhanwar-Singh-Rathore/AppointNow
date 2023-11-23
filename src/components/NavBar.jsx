import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



 export function NavBar() {
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
      <Link to="/"> <img  className="h-20 -ml-8 -mt-2" src="logo/mainLogo.png"/></Link>
        <li onClick={toasts} className=" hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" ><Link to="">Learn</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" ><Link to="">Integrations</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1" > <Link to="">Features</Link></li>
        <li onClick={toasts} className=" hover:bg-blue-500 focus:outline-none focus:ring   
      focus:ring-black-300 br rounded  px-4 py-1" ><Link to="">Industries</Link></li>
    
              <li className=" ml-82 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1 ml-80 flex" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg><Link to="/login">login</Link></li>
      
            <Link to="/signupformuser"> <li className=" hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1 ml " >signup</li></Link>
      </ul>
     
    </nav>
    <div className="flex justify-end ">
    <div  className="md:hidden  sm:block ease-in-out duration-500 mt-8" onClick={handleNav}> {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

 :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> }</div>
    </div>
    <Link to="/"> <img  className="h-20 ml-4 md:hidden -mt-14" src="logo/mainLogo.png"/></Link>
    <div className={!nav ? '  sm:m-6  ease-in-out duration-500 lg:ml-8 ': 'hidden' }>

    <ul className="  mb-2  mt-2  lg:mb-0 lg:mt-0 lg:items-center md:hidden  font-thin w-64   " >
      
        <li onClick={toasts} className=" ml-8  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1  border-b border-gray-200 "  ><Link to="">Learn</Link></li>
        <li onClick={toasts} className="ml-8 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1  border-b border-gray-200 " ><Link to="">Integrations</Link></li>
        <li onClick={toasts} className=" ml-8 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1  border-b border-gray-200 " > <Link to="">Features</Link></li>
        <li  onClick={toasts} className=" ml-8 hover:bg-blue-500 focus:outline-none focus:ring    border-b border-gray-200 
      focus:ring-black-300 br rounded  px-4 py-1" ><Link to="">Industries</Link></li>
    
              <li  className="  ml-8 ml-82 hover:bg-blue-500  border-b border-gray-200 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1  flex" ><Link to="/login">login</Link></li>
     
            <Link to="/signupformuser"> <li className=" hover:bg-blue-500 ml-8  border-b border-gray-200 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1 ml " >signup</li></Link>
      </ul>

    </div>
   </>
  );
}

export default NavBar;
 