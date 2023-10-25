import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import ButtonRow from "../../ui/ButtonRow";
import { useUpdateUser } from "./useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isEditing } = useUpdateUser();
  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess() {
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
  }
  return (
    <Form type="login" onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          disabled={isEditing}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          type="file"
          accept="image/*"
          disabled={isEditing}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>

      <ButtonRow>
        <Button
          type="reset"
          disabled={isEditing}
          onClick={handleCancel}
          variation="secondary"
        >
          Cancel
        </Button>
        <Button disabled={isEditing}>
          {isEditing ? <SpinnerMini /> : "Update User"}
        </Button>
      </ButtonRow>
    </Form>
  );
}

export default UpdateUserDataForm;
