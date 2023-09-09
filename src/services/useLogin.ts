import {User} from "../types/User.ts";
import {authUrl} from "./baseUrl.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const loginHandler = async (login:User) => {
    const {data} = await authUrl.post("/login", login)
    return data.data
}

const useLoginHandler = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (login:User) => loginHandler(login),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
}

export default useLoginHandler