import {useNavigate} from "react-router-dom";
import useGetPostList from "../services/usePostList.ts";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const PostListView = () => {
    const navigate = useNavigate();
    const {isLoading, isSuccess, error, data} = useGetPostList();


    return (
        <Container>
            <Row>
                <h1>
                    PostListView페이지입니다.
                </h1>
                {isLoading && <h1>loading</h1>}
                {error && <h1>{error.message}</h1>}
                {isSuccess && data?.map((item,index) => (
                    <Col key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.content}
                                </Card.Text>
                                <Button onClick={() => navigate(`/${item.id}`)} variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Button onClick={() => navigate("/new")}> 등록하기 </Button>
            </Row>
        </Container>
    );
};

export default PostListView;