import React from 'react';
import useGetPostList from "../services/usePostList.ts";

const PostListView = () => {
    const {isLoading, isSuccess, error, data} = useGetPostList()
    return (
        <div>
            {isLoading && <h1>loading</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data?.map((item, index) => (
                <h1>
                    {item.title}
                </h1>
            ))}
        </div>
    );
};

export default PostListView;