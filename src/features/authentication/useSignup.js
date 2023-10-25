import { useMutation } from "@tanstack/react-query";
import { Register } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: Register,
    onSuccess: () => {
      
      toast.success("Account successfully created");
    },
  });
  return { signup, isLoading };
}
