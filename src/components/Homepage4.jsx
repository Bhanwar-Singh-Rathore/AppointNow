import toast from "react-hot-toast";

function Homepage4() {
    function toasts() {
        toast.success('Feature to be implemented soon');
        
        
      }
    return (
        <div className="grid -ml-32  sm:m-6 lg:ml-8 mt-10 md:grid-cols-2  " >
        <div className="ml-40  mt-10 mb-6 ">
            <p className="text-4xl font-bold">Get your free</p>
            <p className="text-4xl mt-2 font-bold">scheduling app now.</p>
            <p className="text-base mt-8">Step right up and manage all of your bookings through</p>
            <p className="text-base mt-2">one online appointment scheduler. Seamless automation</p>
            <p className="text-base mt-2">enables your business to run like clockwork</p>

            <div className="flex" ><p className="mt-10 py-2 px-14 cursor-pointer  bg-blue-500 rounded" onClick={toasts}>Windows</p> <p className="mt-10 py-2 px-14 cursor-pointer ml-10 bg-blue-500 rounded" onClick={toasts}>Mac</p></div>
            <p className="mt-5">Android and IOS mobile apps are also available.</p>
        </div>
        <div>
            <img className="h-56 mt-10 ml-32" src="images/setmore-calendar.webp"/>
        </div>
        </div>
    )
}

export default Homepage4
