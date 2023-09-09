import {useNavigate} from "react-router-dom";
import useGetPostList from "../services/usePostList.ts";

const PostListView = () => {
    const navigate = useNavigate();
    const {isLoading, isSuccess, error, data} = useGetPostList();


    return (
        <div>
            <h1>
                PostListView페이지입니다.
            </h1>
            {isLoading && <h1>loading</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data?.map((item,index) => (
                <div key={index}>
                    <h1>
                        {item.title}
                    </h1>
                    <button onClick={() => navigate(`/${item.id}`)}>
                        자세히보기
                    </button>
                </div>
            ))}
            <button onClick={() => navigate("/new")}> 등록하기 </button>
        </div>
    );
};

export default PostListView;