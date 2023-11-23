import supabase from "./supabase";

export async function ShopsData() {
 
const { data: ServiceProvider_details, error } = await supabase
.from('ServiceProvider-details')
 .select('*')
// .select('country');


  if (error) {
    console.log(error);
    throw new Error("faild to read data");
  }
  return  ServiceProvider_details;
}
