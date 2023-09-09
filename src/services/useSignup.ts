import {authUrl} from "./baseUrl.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Signup} from "../types/Signup.ts";

const signUpHandler = async (signup:Signup) => {
    const {data} = await authUrl.post("/signup", signup)
    return data.data
}

const useSignUpHandler = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (signUp:Signup) => signUpHandler(signUp),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
}

export default  useSignUpHandler