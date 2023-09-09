import {useParams} from "react-router-dom";
import useGetPostDetail from "../services/usePostDetail.ts";

const PostDetailView = () => {
    const {id} = useParams<{id:string}>();
    const {isLoading, isSuccess, error, data:post} = useGetPostDetail(id);

    return (
        <div>
            <h1>
                PostDeatilView입니다.
            </h1>
            {isLoading && <h1>loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && post && (
                <div>
                    <h1>
                        {post.title}
                    </h1>
                    <h1>
                        {post.content}
                    </h1>
                    <h1>
                        {post.category}
                    </h1>
                </div>
            )}
        </div>
    );
};

export default PostDetailView;