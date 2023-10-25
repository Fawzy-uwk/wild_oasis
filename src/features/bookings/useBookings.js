import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/Constants";
export const useBookings = () => {
  //1)server-side filtering
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //2)client-side pagination and sorting
  const sortByRow = searchParams.get("sortBy") || "start_date-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  //3)Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Getting Data
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    //when the sort or filter or page changes data refetches
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-Fetching
  const pagesCount = Math.ceil(count / PAGE_SIZE);

  if (page < pagesCount)
    queryClient.prefetchQuery({
      //when the sort or filter or page changes data refetches
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      //when the sort or filter or page changes data refetches
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, error, count };
};
