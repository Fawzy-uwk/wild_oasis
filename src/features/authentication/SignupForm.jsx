import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";
import ButtonRow from "../../ui/ButtonRow";
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const onSubmit = ({ fullName, email, password }) => {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  };
  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This Field is required" })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This Field is required",
            minLength: { value: 8, message: "Minimum length should be 8" },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This Field is required",
            validate: (value) =>
              value === getValues().password || "Passwords do not match",
          })}
        />
      </FormRow>

      {/* type is an HTML attribute! */}
      <ButtonRow>
        <Button variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button>{isLoading ? <SpinnerMini /> : "Create new user"}</Button>
      </ButtonRow>
    </Form>
  );
}

export default SignupForm;
