import React, {Component} from 'react';
import {Jumbotron, Button, Container, Form} from 'react-bootstrap';


class File extends Component{

  constructor(props) {
      super(props);
        this.state = {
          selectedFile: null
      }
  };


  onChangeHandler=event=>{
    var file = event.target.files[0];
    console.log(file);

    this.setState({
      selectedFile: file
      });
  }


  fileUploadHandler = () => {
    const data = new FormData()
    console.log(this.state.selectedFile);
    data.append('file', this.state.selectedFile)
    console.log(data);

   //  const requestOptions = {
   //     method: 'POST',
   //     headers: { 'Content-Type': 'application/json' },
   //     body: JSON.stringify({ title: 'React POST Request Example' })
   // };
   // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
   //     .then(response => response.json())
   //     .then(data => this.setState({ postId: data.id }));

    fetch('http://localhost:8080/fileTest'
    ,{
        mode: 'no-cors'
      , method: 'POST'
      , headers: {
          // 'content-type': 'multipart/form-data'
          'accept': 'application/json'
        , 'type': 'formData'}
      , body: data
    });

  };


  render() {
      return (
        <Container fluid>
        <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" onChange={this.onChangeHandler}/>
        </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={this.fileUploadHandler}>
          Submit
        </Button>
        </Container>
      );
  }
}

export default File;
