// import { useMutation } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// // import { Link } from "react-router-dom"
// import userDetails from "../../service/apiUserDetails";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../../ui/Spinner";

// function ServiceForm() {
//   const nav = useNavigate();
//   const { mutate, isLoading } = useMutation({
//     mutationFn: userDetails,
//     mutationKey: ["userDetails"],
//     onSuccess: () => {
//       nav("/serviceform");
//       console.log("sucess")
//     },
//     //  onError:err=>console.log(err)
//   });
//   const { register, handleSubmit } = useForm();

//   if (isLoading) return <Spinner />;
//   function handleSubmits(data) {
//     console.log(data);
//     mutate(data);
//   }
//   return (
//     <div>
//       <div className="flex justify-center mr-20">
//         <form
//           onSubmit={handleSubmit(handleSubmits)}
//           className="flex-col mt-40 "
//         >
//           <p className="-mt-10 mb-10 flex justify-center  ">
//             Get your bussines online
//           </p>
//           {/* <input type="hidden" value={user} {...register('id')}/> */}
//           <label className="mt-4">Bussiness Name</label>
//           <div>
//             <input
//               {...register("bussiness_name")}
//               className=" border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
//               placeholder="Bussiness Name"
//             />
//           </div>
//           <label>Select by industry or business type</label>
//           <div >
            
//             <select  className=" border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  " {...register("industry")}>
            
//               <option>Automotive</option>
//               <option>Barbershop</option>
//               <option>Business services</option>
//               <option>Cafe</option>
//               <option>Clinic</option>
//               <option>Consulting</option>
//               <option>Creative services</option>
//               <option>Dentist</option>
//               <option>Designer</option>
//               <option>Developer</option>
//               <option>Educational institution</option>
//               <option>Hair salon</option>
//               <option>Medical</option>
//               <option>Mentor</option>
//               <option>Nail Salon</option>
//               <option>Non-Profit organization</option>
//               <option>Pet Services</option>
//               <option>Photography</option>
//               <option>Recruiting</option>
//               <option>Restaurant</option>
//               <option>Shopping</option>
//               <option>Spa</option>
//               <option>Sports</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <label className="mt-4">Phone Number</label>
//           <div>
//             <input
//               className=" border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
//               {...register("mobile_no")}
//               placeholder="Phone Number"
//             />
//           </div>

//           {/* <Link to="/homepageservice"> */}
//           <button
//             className=" flex bg-blue-600  rounded ml-80 mt-2 text-white py-2 px-7 "
//             type="submit"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
//               />
//             </svg>
//             Next
//           </button>
//           {/* </Link> */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ServiceForm;
