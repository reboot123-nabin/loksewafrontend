import React from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';



const Purchasequestion = () => {

    const purchasesubmit = () => {
        confirmAlert({
            title: 'Purchasequestion',
            message: 'Are you sure you want to purchase?',
            buttons: [
                {
                    label: 'Yes',
                   
                },
                {
                    label: 'No',
                }
            ]
        });
    }
    return (
        <>

        <div className="purchasequestion">
            <div className="container purchasequestion">
                <div className="row">
                    <div className="col-md-12">
                 <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter number of question</Form.Label>
            <Form.Control type="number" placeholder="Enter number of question" />
            
        </Form.Group>

    
        <Button variant="primary" onClick={purchasesubmit} type="submit">
            Submit
        </Button>
        </Form>

                    </div>
                </div>
            </div>
       


      </div>
    
            
        </>
    )
}

export default Purchasequestion
