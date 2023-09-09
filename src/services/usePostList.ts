import {postUrl} from "./baseUrl.ts";
import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";

const getPostList = async () => {
    const {data} = await postUrl.get("/")
    console.log(data.data)
    return data.data
}

const useGetPostList = () =>
    useQuery<Array<Post>, Error>({
        queryKey : ["post"],
        queryFn : () => getPostList()
    })

export default useGetPostList