import {postUrl} from "./baseUrl.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";

const postPostCreate = async (post:Post) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }
    const {data} = await postUrl.post("/", post, config)
    return data.data
}

const usePostPostCreate = () =>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (post: Post) => postPostCreate(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
        }
    })
}

export default usePostPostCreate