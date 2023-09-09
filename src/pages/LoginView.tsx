import React from 'react';
import {useForm} from "react-hook-form";
import {UserFormValues} from "../types/UserFormValues.ts";
import useLoginHandler from "../services/useLogin.ts";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginView = () => {

    const {isLoading, error, mutateAsync} = useLoginHandler()
    const {register, handleSubmit} = useForm();
    const onSubmit = async (values: UserFormValues)=> {
        console.log(values)
        await mutateAsync(values)
    }

    return (
        <Container>
            {isLoading && <h1>loading</h1>}
            <Row className={"justify-content-lg-center"}>
                <Col xs lg="2">

                </Col>
                <Col md = "auto">
                    <Form onSubmit={handleSubmit(onSubmit)}>

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
                            로그인
                        </Button>
                    </Form>
                </Col>
                <Col xs lg="2">

                </Col>
            </Row>
        </Container>
    );
};

export default LoginView;