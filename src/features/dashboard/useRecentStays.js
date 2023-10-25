import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import {  getStaysAfterDate } from "../../services/apiBookings";
export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const daysNum = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), daysNum).toISOString();

  const {isLoading,data:stays,error}=useQuery({
    queryFn:()=>getStaysAfterDate(queryDate),
    queryKey:['stays',`last-${daysNum}` ]
  })

  const confirmedStays=stays?.filter(stay=>stay.status!=="unconfirmed")
  return { isLoading, stays, error,confirmedStays,daysNum };
}
