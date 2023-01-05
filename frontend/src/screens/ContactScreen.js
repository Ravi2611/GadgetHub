import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
        </Link>   
        <Row>
            <Col>
                <Image src='/images/laptop_use_and_see.jpg' alt='laptop_use_and_see' fluid />
            </Col>
            <Col>
                <h2>Description</h2>
                <>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</>
            </Col>
        </Row>
        <Row>
            <Col className='m-5'>
                <h2>What stands us apart</h2>
                <h5 className='p-3'>Extended Warranty</h5>
                <>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</>
                <h5 className='p-3'>Get best Laptops at half price</h5>
                <>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</>
            </Col>
            <Col>
                <Image className='m-3' src='/images/extended_warranty.jpg' alt='extended_warranty' fluid />
            </Col>
        </Row>
        <h1>Contact Us</h1>
        <Row>
            <Col className='m-5'>
                <Image className='m-3' src='/images/card.jpg' alt='card' fluid />
            </Col>
            <Col>
                <Row>
                    <>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</>
                </Row>
                <Row>
                    <Col className='p-5'>
                        <h4>Follow us</h4>
                    </Col>
                    <Col>
                        <a href='www.facebook.com'>
                        <Button className='btn btn-dark m-5'>Facebook</Button>
                        </a>
                    </Col>
                    <Col>
                        <a href='www.instagram.com'>
                        <Button className='btn btn-dark m-5'>instagram</Button>
                        </a>
                    </Col>
                    <Col className='p-5'>
                        <h4>Follow us</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default ContactScreen
