import React, {Component} from 'react';
import {Jumbotron, Button, Form, Row, Col, Container} from 'react-bootstrap';

class Home extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <Jumbotron>
              <h1>David Shin</h1>
              <p>
                Hello I am David. I am senior software engineer!
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
          </Jumbotron>


        );
    }
}

export default Home;
