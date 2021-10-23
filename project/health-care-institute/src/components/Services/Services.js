import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { id, title, short_description, description, image } = props.service;
    return (

        <Col className="col-md-6 col-sm-12 py-3"><Card className="text-center">
            <Card.Header>
                {title.slice(0, 20)}</Card.Header>
            <Card.Body>
                <Card.Title>{short_description.slice(0, 31)}</Card.Title>
                <img
                    className="d-block w-100"
                    src={image}
                    alt={title}
                    style={{ height: '300px' }}
                />
                <Card.Text>
                    {description.slice(0, 200)} ...
                </Card.Text>
                <Link to={`/service/${id}`}><Button variant="primary">View Details</Button></Link>

            </Card.Body>
        </Card>
        </Col>


    );
};

export default Services;