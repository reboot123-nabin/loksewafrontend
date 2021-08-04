import React from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';

const Topupquestion = () => {
    const TopupSubmit = () => {
        confirmAlert({
            title: 'Topupquestion',
            message: 'Are you sure you want to Topup question?',
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
        
        <div className="Topupquestion">
            <div className="container questiontopup">
                <div className="row">
                    <div className="col-md-12">
                 <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter number you want to topup</Form.Label>
            <Form.Control type="number" placeholder="Enter number of question" />
            
        </Form.Group>

    
        <Button variant="primary" onClick={TopupSubmit} type="submit">
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

export default Topupquestion
