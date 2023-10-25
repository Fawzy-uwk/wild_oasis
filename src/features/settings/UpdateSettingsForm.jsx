import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useEditSetting } from "./useEditSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minbookinglength,
      maxbookinglength,
      maxguestsperbooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isEditing, editSetting } = useEditSetting();
  function handleEdit(e, field) {
    const { value } = e.target;

    if (!value) return;
    editSetting({ [field]: value });
  }
  if (isLoading) <Spinner />;
  return (
    <Form type="login">
      <FormRow>
        <Label htmlFor="min-nights">Minimum Nights/Booking</Label>
        <Input
          defaultValue={minbookinglength}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, "minbookinglength")}
          type="number"
          id="min-nights"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="max_nights">Maximum Nights/Booking</Label>
        <Input
          defaultValue={maxbookinglength}
          onBlur={(e) => handleEdit(e, "maxbookinglength")}
          type="number"
          id="max-nights"
          disabled={isEditing}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="max-guests">Maximum Guests/Booking</Label>
        <Input
          defaultValue={maxguestsperbooking}
          onBlur={(e) => handleEdit(e, "maxguestsperbooking")}
          type="number"
          id="max-guests"
          disabled={isEditing}
        />
      </FormRow>

      <FormRow >
        <Label htmlFor="breakfast-price">Breakfast Price</Label>
        <Input
          defaultValue={breakfastPrice}
          onBlur={(e) => handleEdit(e, "breakfastPrice")}
          type="number"
          id="breakfast-price"
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
