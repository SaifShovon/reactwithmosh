import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = (props) => {
    const { service_id } = useParams();
    // console.log(props.all_service);
    return (

        <div>
            <h3 className="bg-secondary py-3 my-3">Service Details</h3>
            {

                props.all_service.filter(service => service.id == service_id).map(service =>
                    <Row className="px-5 py-3" key={service.id}>
                        <Col className="col-md-12 col-sm-12 py-3"><Card className="text-center">
                            <Card.Header>{service.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{service.short_description}</Card.Title>
                                <img
                                    className="d-block w-100"
                                    src={service.image}
                                    alt={service.title}
                                    style={{ height: '300px' }}
                                />
                                <Card.Text>
                                    {service.description} ...
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        </Col>

                    </Row>
                )
            }
        </div>
    );
};

export default ServiceDetails;