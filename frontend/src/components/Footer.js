import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; GadgetHub
                </Col>
                <Col className='text-center py-3'>
                    <a href='/developer'>
                        <Button>
                            Developer's Info
                        </Button>
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
