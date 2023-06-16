import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { ROUTES } from '../../utils/helpers/routes'
import useApi from './useApi'

const queryKeys = {
    all: ['response'],
};

export const usePostFeedback = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation(useApi().postFeedback, {
        onSuccess: (data) => {
            if (data) {
                Swal.fire({
                    title: "Success!",
                    text: "Succeed to add feedback",
                    icon: "success",
                    timer: 3000,
                    showConfirmButton: false,
                })
                queryClient.invalidateQueries(queryKeys.all);
                navigate(ROUTES.HOME);
            }
        },
        onError: () => {
            queryClient.invalidateQueries(queryKeys.all);
        }
    });
};
