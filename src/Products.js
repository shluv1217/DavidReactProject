import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8080/product/demo/all')
          .then(response => response.json())
          .then(data => this.setState({products: data, isLoading: false}));

    }

    render() {
      const {products, isLoading} = this.state;

       if (isLoading) {
         return <p>Loading...</p>;
       }


      return (
          <div>
            <h2>Product List</h2>
            {products.map((product: product) =>
              <div key={product.id}>
                {product.name}
              </div>
            )}
          </div>
      );
    }
}

export default Products;
