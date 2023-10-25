import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: LogOut,
    onSuccess: () => {
      queryClient.removeQueries();

      navigate("/login"), { replace: true };
    },
  });
  return { logout, isLoading };
}
