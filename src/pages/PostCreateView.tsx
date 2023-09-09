import {useForm} from "react-hook-form";
import {PostFormValues} from "../types/PostFormValues.ts";
import usePostPostCreate from "../services/usePostCreate.ts";
import {useNavigate} from "react-router-dom";

const PostCreateView = () => {
    const navigate = useNavigate();
    const {isLoading,error, mutateAsync} = usePostPostCreate()
    const {register,handleSubmit} = useForm()
    const onSubmit = async (values: PostFormValues) => {
        const newPost = {
            title: values.title,
            content: values.content,
            category: values.category,
            image: values.image
        }
        console.log(newPost)
        // await mutateAsync(newPost)
        // navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading && <h1>loading</h1>}
                {error && <h1>{error}</h1>}
                <input
                    type = "text"
                    placeholder= "title"
                    {...register("title", {required:true})}
                />
                <input
                    type = "text"
                    placeholder= "content"
                    {...register("content", {required:true})}
                />
                <input
                    type = "text"
                    placeholder= "category"
                    {...register("category", {required:true})}
                />
                <input
                    type = "text"
                    placeholder= "image"
                    {...register("image", {required:true})}
                />
                <input type= "submit"/>
            </form>
        </div>
    );
};

export default PostCreateView;