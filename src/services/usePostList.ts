import postUrl from "./baseUrl.ts";
import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";

const getPostList = async () => {
    const {data} = await postUrl.get("/")
    return data.data
}

const useGetPostList = () =>
    useQuery<Array<Post>, Error>({
        queryKey : ["posts"],
        queryFn : () => getPostList()
    })

export default useGetPostList