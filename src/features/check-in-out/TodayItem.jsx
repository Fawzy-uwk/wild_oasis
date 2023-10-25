import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-gray-100);

  &:first-child {
    border-top: 1px solid var(--color-gray-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
/* eslint-disable react/prop-types*/
function TodayItem({ activity }) {
  const { id, status, guest, nights_number } = activity;
  return (
    <StyledTodayItem>
    {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
    {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guest.countryFlag} alt={`flag of ${guest.country}`} />
      <Guest>{guest.fullName}</Guest>
      <p>{nights_number} nights</p>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
