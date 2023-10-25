import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const daysNum = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), daysNum).toISOString();

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["booking", `last-${daysNum}`],
  });
  return { isLoading, bookings, error };
}
