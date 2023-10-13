import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Dashboard, Category, Product, Header, Footer} from './components/admin/Index'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        
        {/* Content row*/}
        <Row>
          <Col md={2}>
            <ul>
              <li><Link to={'/admin'}>Home</Link></li>
              <li><Link to={'/admin/category'}>Category</Link></li>
              <li><Link to={'/admin/product'}>Product</Link></li>
            </ul>
          </Col>
          <Col>
            <Routes>
              <Route  path={'/admin'} element={<Dashboard/>} />
              <Route  path={'/admin/category'} element={<Category/>} />
              <Route  path={'/admin/product'} element={<Product/>} />
            </Routes>
          </Col>
        </Row>

        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
