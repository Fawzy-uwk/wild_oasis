import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted 🙂 ");
      queryClient.invalidateQueries({
        queryKey: "booking",
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleteing, deleteBooking };
};
