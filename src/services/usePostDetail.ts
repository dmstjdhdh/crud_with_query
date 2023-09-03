import postUrl from "./baseUrl.ts";
import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";

const getPostDetail = async (id: string) => {
    const {data} = await postUrl.get(`/${id}`)
    return data.data
}

const useGetPostDetail = (id:string) =>
    useQuery<Post, Error>({
        queryKey : ["post", id],
        queryFn : () => getPostDetail(id)
    })

export default useGetPostDetail