import React, {Component} from 'react';
import {Nav,  Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import Home from './Home';
import File from './File';
import Employees from './Employees';
import Products from './Products';

class App extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <Router>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Menu1" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/File">File</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.2">Menu1-1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.3">Menu1-2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Menu2" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Employees">Subscription</NavDropdown.Item>
                    <NavDropdown.Item href="/Products">Product List</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Purchase</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Employees">
                    <Employees/>
                </Route>
                <Route exact path="/Products">
                    <Products/>
                </Route>
                <Route exact path="/File">
                    <File/>
                </Route>
            </Switch>
          </Router>
        );
    }
}

export default App;
