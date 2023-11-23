import { useMutation } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

import { useState } from "react";
import { useShopDetails } from "./useShopsDetails";
import { useForm } from "react-hook-form";
import { InsertEvent } from "../service/apiInsertEvent";
import { useUser } from "./useUser";

import Spinner from "../ui/Spinner";
import NavBar from "../components/NavBarUser";
import toast from "react-hot-toast";

import { Link, useParams } from "react-router-dom";
import CountdownTimer from "./Timer";
import Timer from "./Timer";

///////////////////////////////////////////////////////////////////////////////////////////
// eslint-disable-next-line react/prop-types
export function CardDetails() {
  const { id } = useParams();
  const { isLoading, details } = useShopDetails();
  
  const [value, setValue] = useState(dayjs("2023-11-20"));
  const [froms, setform] = useState(false);
  const [froms1, setFroms1] = useState(false);
  const [timer, settimer] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log("details in datacard", isLoading, details);
  
  const handleFormvideo = () => {
    setFroms1(!froms1);
    setdemo(!demo) ;
    // setFormSubmitted(!formSubmitted);// Toggle the form's visibility on button click
  };
  
  function handleForm() {
    setform(!froms);
  }
  const hour = value.$H < 10 ? `0${value.$H}` : value.$H;
  const month = value.$M + 1 < 10 ? `0${value.$M + 1}` : value.$M + 1;
  const day = value.$D < 10 ? `0${value.$D}` : value.$D;
  const minute = value.$m < 10 ? `0${value.$m}` : value.$m;
  const date = `${value.$y}-${month}-${day}T${hour}:${minute}`;
  

  const [demo,setdemo]=useState(false)
  const { user } = useUser();

  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({
    mutationFn: InsertEvent,
    mutationKey: ["CreateEvent"],
    onSuccess: () => {
      console.log("successs");
      {demo ?setFormSubmitted(!formSubmitted):null
        }
        setFroms1(!froms1)
      toast.success("Booking successful Created");
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmits(data) {
    // Update the date_time field in the data object with the selected date from the state
    data.date_time = date;

    // Perform the mutation with the updated data
    mutate(data);

    // Additional logic if needed
    settimer(!timer);
  }

  if (isLoading) return <Spinner />;
  // const port = window.location.port;



  const industry = details.industry;
  const allowedIndustries = ['Clinic','Consulting', 'Developer', 'mentor', 'gym'];

  return (
    <>
      <NavBar />
      <div className="ml-2  mt-4  ">
        {/* <div className=" h-44 rounded bg-[url('./public/bg.jpeg')]">
          <img className="" src="./public/booking.webp" />
        </div> */}
           <div className="bg-gray-100 h-48  rounded w-96  md:w-[1200px] "></div>
        <div className="bg-blue-100 h-32 -mt-20 rounded-full w-32 ">
          

        {/* <img className="" src="./public/saloon.webp" /> */}
        </div>
     
        {/* <div className=" h-32 w-32 rounded-full   ml-2 -mt-16 bg-[url('./public/bg.jpeg')"></div> */}
        <div className="ml-10  mt-05">******</div>

        <div className=" justify-center grid md:grid-cols-2 lg:grid-cols-3">
          <div className=" -ml-20 lg:border-r-[3px]  space-y-2">
            
            <p className="bg-blue-400 px-2 py-2 rounded-sm md:ml-20 md:mt-20 ml-40">coming soon.........</p>
          </div>
          <div className="ml-10">
           
            
            <div className="mt-6 text-xl ml-1  flex gap-5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>
{details.bussiness_name}</div>
          <div  className="mt-6 text-xl ml-1 flex gap-5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
{details.mobile_no}</div>
           
            <div className="mt-6 text-xl ml-1 flex gap-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
</svg>
{details.country}</div>
            <div className="mt-6 text-xl ml-1 flex gap-5" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
{details.industry}</div>
            <div className="mt-6 ml-1 flex gap-5 text-xl " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 gap-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
{details.shop_address}</div>
            <div className="gap-5 mt-6 text-xl ml-1 flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Coming soon
</div>
          </div>

          <div className="lg:border-l-[3px] mt-6 md:ml-0 md:   ">
            {/* /////////////////////////////// */}
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                  <DemoItem>
                  <DateCalendar
  value={value}
  onChange={(newValue) => {
    console.log("Selected date:", newValue);
    setValue(newValue);
  }}
/>
                  </DemoItem>
                  <TimePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            {/* //////////////////////////// */}
            <div>
      {allowedIndustries.includes(industry) ? (
        <div>
          <button
            onClick={handleFormvideo}
            className="bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2"
          >
            Book virtual Appointment
          </button>
          {froms1 && (
           
            <form className="flex-col ml-20" onSubmit={handleSubmit(onSubmits)}>
              <div>
                <input
                  className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                  type="hidden"
                  {...register("service_id")}
                  value={details.id}
                />
              </div>
              <div>
                <input
                  className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                  type="hidden"
                  {...register("video_Call_Link")}
                  value={`facecall/${id}`}
                  // http://localhost:5173/facecall/b8f3092e-f673-47db-b2e4-63638fbab19d
                />
              </div>
              <div>
                <input
                  type="hidden"
                  {...register("user_id")}
                  value={user.id}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                  placeholder=" enter name"
                  {...register("user_name")}
                />
              </div>
              <div>
              <input
    type="text"
    readOnly // Add readOnly attribute here
    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
    value={`${day}-${month}-${value.$y} Time ${hour}:${minute}`}
    placeholder=" date time"
  />
  <input
    type="hidden"
    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
    value={date}
    placeholder=" date time"
    {...register("date_time")}
  />
              </div>
              <div>
                <input
                  type="text"
                  className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                  placeholder=" mobile"
                  {...register("mobile_no")}
                />
              </div>
              <button
                type="submit"
                className=" bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2"
              >
                submit
              </button>
            
            </form>
          )}
        </div>
      ) :  null}
    </div>
    {formSubmitted ? (
     
          <Link to={`/facecall/${id}`}>
            <div className="flex bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2 gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>Join Now</div>
        </Link>
      ) : (
        null
      )}
    
            <button onClick={handleForm} className="bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2 " >BookNow </button>
            {froms && (
              <form className="flex-col ml-20" onSubmit={handleSubmit(onSubmits)}>
                <div>
                  <input
                    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                    type="hidden"
                    {...register("service_id")}
                    value={details.id}
                  />
                </div>
                <div>
                  <input
                    type="hidden"
                    {...register("user_id")}
                    value={user.id}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                    placeholder=" enter name"
                    {...register("user_name")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                    value={`${day}-${month}-${value.$y} Time ${hour}:${minute}`}
                    placeholder=" date time"
                    {...register("date_time")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
                    placeholder=" mobile"
                    {...register("mobile_no")}
                  />
                </div>
                <button
                  type="submit"
                  className=" bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2"
                >
                  submit
                </button>
              </form>
            )}
          
          </div>
          {/* {
<Link to={`/facecall/${id}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
</Link>} */}
          {/* {details.industry === "Clinic" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )}
          {details.industry === "Consulting" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )}
          {details.industry === "Creative services" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )}
          {details.industry === "Developer" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )}
          {details.industry === "Restaurant" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )}
          {details.industry === "Mentor" && (
            <Link to={`/facecall/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          )} */}
        </div>
      </div>
      {/* form */}

      {/* </div> */}
    </>
  );
}
