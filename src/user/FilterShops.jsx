function FilterShops() {
    return (
        <div className=" hidden md:flex justify-between mr-48 ml-36 bg-gray-100 px-3 rounded
         py-3 -mt-2 ">
        <div className=" hover:bg-blue-500 rounded w-20 ml-2 text-center  h-7">Barbershop</div>
        <div className=" hover:bg-blue-500 rounded w-20  text-center  h-7">Cafe</div>
        <div className=" hover:bg-blue-500 rounded w-20  text-center  h-7">Clinic</div>
        <div className=" hover:bg-blue-500 rounded w-20  text-center  h-7">Consulting</div>
        <div className=" hover:bg-blue-500 rounded w-20  text-center  h-7">Dentist</div>
        <div className=" hover:bg-blue-500 rounded w-20  text-center  h-7">Developer</div>
        <div className=" hover:bg-blue-500 rounded w-20 mr-2  text-center  h-7">salon</div>
        </div>
    )
}

export default FilterShops
