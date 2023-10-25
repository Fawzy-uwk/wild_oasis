import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router";
import { useCheckout } from "../check-in-out/useCheckOut";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: var(--color-gray-800);
  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-gray-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
/* eslint-disable react/prop-types*/
function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    start_date,
    end_date,
    nights_number,
    guests_number,
    total_price,
    status,
    guest,
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const navigate = useNavigate();
  const { isCheckingOut, checkout } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guest?guest.fullName:""}</span>
        <span>{guest?guest.email:""}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(start_date))
            ? "Today"
            : formatDistanceFromNow(start_date)}{" "}
          &rarr; {nights_number} night stay
        </span>
        <span>
          {format(new Date(start_date), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(end_date), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(total_price)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              Details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check In
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check Out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId,{onSettled:()=>navigate(-1)})}
              
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
