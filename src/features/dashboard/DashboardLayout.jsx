import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import States from "./states";
import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  color: var(--color-gray-700);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { isLoading: isLoading2, confirmedStays, daysNum } = useRecentStays();
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading || isLoading1 || isLoading2) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <States
        bookings={bookings}
        daysNum={daysNum}
        confirmedStays={confirmedStays}
        cabinsNum={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} daysNum={daysNum} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
