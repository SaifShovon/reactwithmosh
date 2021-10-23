import React from 'react';
import { Card } from 'react-bootstrap';

const MyService = () => {
    return (
        <div>
            <h3 className="bg-secondary py-3">My Service</h3>
            <Card className="text-center" >
                <div key="1">
                    <Card.Header as="h3">Online Doctor</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Cost: 1000 Tk
                        </Card.Text>
                        <Card.Text>
                            Date: 1st Jan 2021
                        </Card.Text>
                    </Card.Body>
                </div >

            </Card>

            <Card className="text-center" >
                <div key="1">
                    <Card.Header as="h3">Ambulance</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Cost: 5000 Tk
                        </Card.Text>
                        <Card.Text>
                            Date: 21st Feb 2021
                        </Card.Text>
                    </Card.Body>
                </div >

            </Card>


        </div >
    );
};

export default MyService;