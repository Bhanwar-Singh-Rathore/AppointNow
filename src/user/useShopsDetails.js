import { useQuery, useQueryClient } from "@tanstack/react-query";
import shopDetails from "../service/shopDetails";
import { useParams } from "react-router-dom";

export function useShopDetails (){
  const queryClient = useQueryClient()

  queryClient.invalidateQueries({ queryKey: ["details"] })
  const { id } = useParams();

  const {
    isLoading,
    data: details,
    error,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: () => shopDetails(id),
    retry: false,
  });

  return { isLoading, error, details };
}
