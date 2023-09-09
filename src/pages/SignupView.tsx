import React from 'react';
import {useForm} from "react-hook-form";
import {SignupFormValues} from "../types/SingupFormValues.ts";
import useSignUpHandler from "../services/useSignup.ts";
import {useNavigate} from "react-router-dom";

const SignupView = () => {
    const navigate = useNavigate();

    const {isLoading, error, mutateAsync} = useSignUpHandler()
    const {register, handleSubmit} = useForm()

    const onSubmit = async (values: SignupFormValues) => {
        console.log(values)
        await mutateAsync(values)
        navigate("/login")
    }

    return (
        <div>
            {isLoading && <h1>loading</h1>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="username"
                    {...register("username",{required:true})}
                />
                <input
                    type="text"
                    placeholder="email"
                    {...register("email",{required:true})}
                />
                <input
                    type="password"
                    placeholder="password"
                    {...register("password", {required:true})}
                />
                <input type= "submit"/>
            </form>
        </div>
    );
};

export default SignupView;