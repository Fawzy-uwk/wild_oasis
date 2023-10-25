import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
/* eslint-disable react/prop-types*/
function States({ bookings, confirmedStays, daysNum, cabinsNum }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.total_price, 0);
  const checkIns = confirmedStays.length;
  const occupations =
    confirmedStays.reduce((acc, cur) => acc + cur.nights_number, 0) /
    (daysNum * cabinsNum);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.ceil(occupations * 100) + "%"}
      />
    </>
  );
}
export default States;
