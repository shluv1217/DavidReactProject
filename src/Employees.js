import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Employees extends Component{
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8080/account/demo/all')
          .then(response => response.json())
          .then(data => this.setState({employees: data, isLoading: false}));

    }

    render() {
      const {employees, isLoading} = this.state;

       if (isLoading) {
         return <p>Loading...</p>;
       }


      return (
          <div>
            <h2>Employee List</h2>
            {employees.map((employee: employee) =>
              <div key={employee.id}>
                {employee.name}
              </div>
            )}
          </div>
      );
    }
}

export default Employees;
