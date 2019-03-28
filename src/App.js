import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListTodos/ListTodos.js';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodoItems } from './graphql/queries';
import { createTodoItem, deleteTodoItem} from './graphql/mutations';
// Imports above this line

Amplify.configure(awsmobile);

class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      todoItems: [],
      "formTitle": '',
      "formDescription": ''
    }
  }

  componentDidMount(){
    this.componentDidUpdate();
  }

  async componentDidUpdate(){
    try {
      const apiData = await API.graphql(graphqlOperation(listTodoItems))
      const todoItems = apiData.data.listTodoItems.items
      this.setState({ todoItems })
    } catch (err) {
      console.log('error: ', err)
    }    
  }

  addTodoHandler = async (event) => {
    event.preventDefault();
    let todoItem = { 
        input: {
        title: this.state.formTitle,
        description: this.state.formDescription
        }
    };
    try {
      await API.graphql(graphqlOperation(createTodoItem, todoItem));
      this.setState({formTitle:''});
      this.setState({formDescription:''})
    } catch (err) {
      console.log('error: ', err)
    }
  }

  closeTodoHandler = async (key) => {
    let todoItem = { input: {'id': key} };
    try {
      await API.graphql(graphqlOperation(deleteTodoItem, todoItem));
      this.setState();

    } catch (err) {
      console.log('error: ', err)
    }
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
            todos={this.state.todoItems}
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

export default withAuthenticator(App, true);
