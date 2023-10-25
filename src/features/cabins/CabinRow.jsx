import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiPencil, HiTrash, HiSquare2Stack } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCabin } from "./useDeleteCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
const Cont = styled.div`
  position: absolute;
  top: 18%;
  left: 20%;
`;
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;
const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* Black background with opacity */
  /* From https://css.glass */
  background: rgba(217, 245, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(217, 245, 255, 0.28);
  z-index: 4000;
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  border-radius: 2px;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-gray-700);
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
// eslint-disable-next-line react/prop-types
function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const [edit, setEdit] = useState(false);
  /* eslint-disable react/prop-types*/
  const { createCabin } = useCreateCabin();
  function handleDuplicate() {
    createCabin({
      name: `Copy of ${cabin.name}`,
      max_capacity: cabin.max_capacity,
      regular_price: cabin.regular_price,
      discount: cabin.discount,
      img: cabin.img,
      description: cabin.description,
    });
  }
  return (
    <>
      <Table.Row>
        {/* eslint-disable react/prop-types*/}
        <Img src={cabin.img} />
        <Cabin>{cabin.name}</Cabin>
        <Price>Max : {cabin.max_capacity}</Price>
        <Price> {formatCurrency(cabin.regular_price)} </Price>
        <Discount>
          {cabin.discount <= 0 ? "_" : formatCurrency(cabin.discount)}
        </Discount>

        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabin.id} />

            <Menus.List id={cabin.id}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabin.id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </Table.Row>
      <Cont>
        {edit && (
          <CreateCabinForm setEdit={setEdit} edit={edit} cabinToEdit={cabin} />
        )}
        {edit && <OverLay onClick={() => setEdit(!edit)} />}
      </Cont>
    </>
  );
}

export default CabinRow;
