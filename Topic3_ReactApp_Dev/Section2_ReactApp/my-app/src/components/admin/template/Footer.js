import { Col, Row } from 'react-bootstrap'

export default function Footer(){
    return (
        <Row style={{lineHeight: '30px', borderTop:'1px solid gray', marginTop:'20px'}}>
            <Col style={{textAlign:'center'}}>
                <h1>Footer component</h1>
            </Col>
        </Row>
    )
}