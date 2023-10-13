import { Col, Row } from 'react-bootstrap'

export default function Header(){
    return (
        <Row style={{lineHeight: '50px', borderBottom:'1px solid gray', marginBottom:'20px'}}>
            <Col style={{textAlign:'center'}}>
                <h1>Header component</h1>
            </Col>
        </Row>
    )
}