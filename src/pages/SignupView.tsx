import React from 'react';
import {useForm} from "react-hook-form";
import {UserFormValues} from "../types/UserFormValues.ts";
import useSignUpHandler from "../services/useSignup.ts";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignupView = () => {
    const navigate = useNavigate();

    const {isLoading, error, mutateAsync} = useSignUpHandler()
    const {register, handleSubmit} = useForm()

    const onSubmit = async (values: UserFormValues) => {
        console.log(values)
        await mutateAsync(values)
        navigate("/login")
    }

    return (
        <Container>
            {isLoading && <h1>loading</h1>}
            <Row className={"justify-content-lg-center"}>
                <Col xs lg="2">

                </Col>
                <Col md="auto">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                {...register("username", {required:true})}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register("email", {required:true})}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register("password", {required:true})}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs lg="2">

                </Col>
            </Row>
        </Container>
    );
};

export default SignupView;