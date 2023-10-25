import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
import Form_tiltle from "../../ui/Form_tiltle";
import { useEditCabin } from "./useEditCabin";
import { useCreateCabin } from "./useCreateCabin";
import ButtonRow from "../../ui/ButtonRow";



const FormRow = styled.div`
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-100);
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-gray-700);
  text-align: start !important;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

/* eslint-disable react/prop-types*/
function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  // const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const img = typeof data.img === "string" ? data.img : data.img[0];

    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, img }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createCabin(
        { ...data, img: img },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }
  // function onError(errors) {}
  return (
    <>
      <Form_tiltle>
        {editId ? `Edit Cabine (${cabinToEdit.name})` : `Create Cabin `}
      </Form_tiltle>
      <Form type="create" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="name">Cabin name</Label>
          <Input
            type="text"
            id="name"
            disabled={isCreating || isEditing}
            {...register("name", { required: "Please fill this field" })}
          />
          {errors?.name?.message && <Error>{errors.name.message}</Error>}
        </FormRow>

        <FormRow>
          <Label htmlFor="max_capacity">Maximum capacity</Label>
          <Input
            type="number"
            id="max_capacity"
            disabled={isCreating || isEditing}
            {...register("max_capacity", {
              required: "Please fill this field",
              min: {
                value: 1,
                message: "capacity can`t be less than 1",
              },
            })}
          />
          {errors?.max_capacity?.message && (
            <Error>{errors.max_capacity.message}</Error>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="regular_price">Regular price</Label>
          <Input
            type="number"
            id="regular_price"
            disabled={isCreating || isEditing}
            {...register("regular_price", {
              required: "Please fill this field",
              min: {
                value: 1,
                message: "Price can`t be less than 1",
              },
            })}
          />
          {errors?.regular_price?.message && (
            <Error>{errors.regular_price.message}</Error>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="discount">Discount</Label>
          <Input
            type="number"
            defaultValue={0}
            id="discount"
            disabled={isCreating || isEditing}
            {...register("discount", {
              required: "This field is required",
              validate: (value) =>
                Number(value) <= getValues().regular_price ||
                "Discount should be less than regular price",
            })}
          />
          {errors?.discount?.message && (
            <Error>{errors.discount.message}</Error>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description for website</Label>
          <Textarea
            type="text"
            id="description"
            defaultValue=""
            disabled={isCreating || isEditing}
            {...register("description", { required: "Please fill this field" })}
          />
          {errors?.description?.message && (
            <Error>{errors.description.message}</Error>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="img">Cabin photo</Label>
          <FileInput
            id="img"
            type="file"
            disabled={isCreating || isEditing}
            accept="image/*"
            {...register("img", {
              required: isEditSession ? false : "This field is required",
            })}
          />
        </FormRow>
        <div></div>
        <ButtonRow>
          {/* type is an HTML attribute! */}
          <Button
            disabled={isCreating || isEditing}
            onClick={reset}
            variation="secondary"
            type="reset"
          >
            Cancel
          </Button>
          <Button disabled={isCreating || isEditing}>
            {!editId ? "Add cabin" : "edit cabin"}
          </Button>
        </ButtonRow>
      </Form>
    </>
  );
}

export default CreateCabinForm;
