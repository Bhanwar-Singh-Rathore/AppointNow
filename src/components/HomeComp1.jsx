import { Link } from "react-router-dom"


function HomeComp1() {
    return (
        <div className="-ml-32  sm:m-6 lg:ml-8 ">
        <div  className=" py-4  ml-40 grid md:grid-cols-2    ">
            <div  className="mt-10  ">
              <h1 className=" mb-5 font-bold text-5xl">Free Scheduling </h1>
              <h1 className=" mb-5 font-bold text-5xl">Software</h1>  
              <h3 className=" mb-3 font-light text-xl">Organize your business with 24/7 automated online </h3>
              <h3 className=" mb-3 font-thin text-xl">booking, reminders, payments, and more.</h3>
             <Link to="/login"> <input className="  border border-white-800 h-12 w-64 mt-4  mb-4 rounded " type="text" placeholder="Enter Email "/></Link>
             <Link to="/login">  <button className="mt-10 py-2 px-14 ml-10 bg-blue-500 rounded"> Free trial</button></Link>
            <div className="flex ">
                <p>or signup with</p>
            <p className="  flex mr-5 ml-5 bg-blue-400 rounded" ><img className="h-4 mt-1 mr-1" src="/images/g.png" />Google</p>
       
            <p className=" rounded flex  bg-blue-400 " > <img className="h-4 mt-1 mr-1" src="/images/f.png" />fackbook</p>
            </div>
           
            </div>
            <div  className="mt-10  ">
                <img  className="h-96 py-2 mx-auto -ml-2 " src="images/setmore.webp" />
            </div>
           
        </div>
        </div>
    )
}




export default HomeComp1
