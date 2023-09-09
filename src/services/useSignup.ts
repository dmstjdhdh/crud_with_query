import {authUrl} from "./baseUrl.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {User} from "../types/User.ts";

const signUpHandler = async (signup:User) => {
    const {data} = await authUrl.post("/signup", signup)
    return data.data
}

const useSignUpHandler = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (signUp:User) => signUpHandler(signUp),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        },
        onError: (err) => {
            console.log(err)
        }
    })
}

export default  useSignUpHandler