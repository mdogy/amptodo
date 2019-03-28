import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListTodos/ListTodos.js';
import {generate} from 'randomstring';


class App extends Component {
  state = {
    "todos": [
      { "key": generate(10),
        "title": 'Walk the cat',
        "description": 'She is going crazy'},
      { "key": generate(10),
        "title": 'Pacify Aliens',
        "description": 'They don\'t want to hear Halloween jokes anymore'}
    ],
    "collapse": false,
    "formTitle": '',
    "formDescription": ''
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    let newTodo = {
      key: generate(10),
      title: this.state.formTitle,
      description: this.state.formDescription
    };
    this.setState({todos:[...this.state.todos,newTodo]});
    this.setState({formTitle:''});
    this.setState({formDescription:''})
  }

  closeTodoHandler = (key) => {
    let todos = [...this.state.todos];
    let deleteIndex = todos.findIndex((item)=>item.key===key);
    todos.splice(deleteIndex, 1);
    this.setState({"todos":todos});
  }

  updateDescriptionField = (event) => {
    event.preventDefault();
    this.setState({ formDescription: event.target.value });
  }


  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based ToDo List</h1>
          </header>
          <ListTodos 
            todos={this.state.todos}
            closer={this.closeTodoHandler}>
          </ListTodos>
          <h2 className='text-left'>Add A ToDo</h2>
          <Form className="text-left" onSubmit={this.addTodoHandler}>
            <Form.Group controlId="formToDo">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                value={this.state.formTitle}
                onChange={(e) => this.setState({formTitle: e.target.value})}/>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
                rows="3" 
                placeholder="Enter Description" 
                value={this.state.formDescription}
                onChange={this.updateDescriptionField}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add Todo
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;

