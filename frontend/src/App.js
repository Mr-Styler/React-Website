import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Navbar, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" className='p-3' variant="dark">
          <Container>
            <Link to="/">F-Mart</Link>
            {/* <LinkContainer to="/">
              <Navbar.Brand>F-Mart</Navbar.Brand>
            </LinkContainer> */}
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div  className='text-center'>All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
