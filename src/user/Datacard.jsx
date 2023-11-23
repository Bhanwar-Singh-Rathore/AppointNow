
import { Link } from "react-router-dom";
// import shopDetails from "../service/shopDetails";


// eslint-disable-next-line react/prop-types
export function Datacard({ data }) {
  const { id, country, bussiness_name, mobile_no, shop_address,industry } = data;

  return (
    //eslint-disable-next-line react/prop-types

    <div className="border-1 border-1  hover:border-blue-800 shadow-md    bg-white border-1 border-solid border-black  mr-5 2xl: w-80 rounded h-[400px] ">
      <Link to={`${id}`}>
      {industry === "Developer" && (
        <img  className="h-48 rounded w-80" src="/images/dev.jpg"/>)}
      {industry === "Consulting" && (
        <img  className="h-48 rounded w-80" src="/images/Consulting.webp"/>)}
        {industry === "Automotive" && (
        <img  className="h-48 rounded w-80" src="/images/images.jpeg"/>)}
        {industry === "Barbershop" && (
        <img  className="h-48 rounded w-80" src="/images/saloon.webp"/>)}
        {industry === "Spa" && (
        <img  className="h-48 rounded w-80" src="/images/spa.jpeg"/>)}
        {industry === "Clinic" && (
        <img  className="h-48 rounded w-80" src="/images/c.webp"/>)}
      
        
        <div className="mt-4 ml-5 ">
          <div className="flex gap-10">
          <div className="mt-3 ml-1 flex gap-5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>
{bussiness_name}</div>
          <div className="mt-3 ml-1 flex gap-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
</svg>
 {country}</div>

 </div>
 <div className="flex gap-6 mt-3">
          <div  className="mt-3 ml-1 flex gap-5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
 {mobile_no}</div>
 <div className="mt-3 ml-1 flex gap-5" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
 {industry}</div>
   </div>
   <div className="mt-6 ml-1 flex gap-5 " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 gap-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
   {shop_address}</div>
          <div className="gap-5 mt-3 ml-1 flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Coming soon
</div>
        </div>
      </Link>
    </div>
  );
}
