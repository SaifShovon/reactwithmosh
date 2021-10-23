import React from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';
import HappyCustomer from './HappyCustomer/HappyCustomer';
import Slider from './Slider/Slider';
import Subscribe from './Subscribe/Subscribe';
const Home = (props) => {
    const all_service = props.all_service;
    return (
        <div>

            <Slider></Slider>

            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Our Services</h3>
                {all_service.map(service =>
                    <Services key={service.id} service={service}></Services>
                )}

            </Row>

            <HappyCustomer></HappyCustomer>
            <Subscribe></Subscribe>

        </div >
    );
};

export default Home;