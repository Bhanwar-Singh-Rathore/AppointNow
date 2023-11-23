import {  useQuery, useQueryClient } from "@tanstack/react-query";
import { ShopsData } from "../service/apiShopsData";
import { Datacard } from "./Datacard";
import Spinner from "../ui/Spinner";
// import ShopDataCard from "./ShopDataCard"

function ShopPageData() {
  const queryClient = useQueryClient()

  queryClient.invalidateQueries({ queryKey: ["shopsData"] })
  const { isLoading, data: shopsdata } = useQuery({
    queryFn: ShopsData,
    queryKey: ["shopsData"],
   
  });
  // console.log(shopsdata);
  if (isLoading) return <Spinner/>;
  return (
    <div className="grid ml-12  sm:m-6  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:ml-32 lg:ml-32 mr-32  mt-16 gap-10 h-16   ">
      {shopsdata.map((datas) => (
        <Datacard data={datas} key={datas.id} /> 
      ))}
      {/* {shopsdata.map(datas =><li key={datas.id}>{datas.id}</li>)} */}
    </div>
  );
}

export default ShopPageData;
