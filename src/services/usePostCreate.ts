import {postUrl} from "./baseUrl.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";

const postPostCreate = async (post:Post) => {
    const {data} = await postUrl.post("/", post)
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