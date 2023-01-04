import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DeveloperScreen = () => {
  return (
    <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col>
                <h5>Connect</h5>
                <a href='https://www.linkedin.com/in/ravi-raj-aa2555212/' className='btn btn-light' size='sm'>LinkedIn</a>
            </Col>
            <Col>
                <h5>Email:</h5>
                rraviraj08211626@gmail.com
            </Col>
        </Row>
    </>
  )
}

export default DeveloperScreen
