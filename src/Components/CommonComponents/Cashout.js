import React from 'react';
import { Dropdown } from 'react-bootstrap';


const Cashout = () => {
    return (
        <>

        <div className="Cashout">
            <h5 className="text-center">From here you can Purchase Your Questions</h5>
            <hr className="w-50 mx-auto"/>
            <div className="container cashquestion">
                <div className="row">
                    <div className="col-md-12">
                    <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Purchase Question
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/purchasequestion" active>
                    Purchasequestion
                    <Dropdown.Divider/>
                </Dropdown.Item>
                <Dropdown.Item href="/topupquestion">Top up</Dropdown.Item>
                
                </Dropdown.Menu>
            </Dropdown>
                    
                    </div>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Cashout
