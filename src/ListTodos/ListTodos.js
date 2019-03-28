
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListTodos (props) {

  let todos = [...props.todos];
  let listItems = todos.map((item)=>
    <ListGroup.Item key={item.id}>
      <Card className="bg-light border rounded">
        <span key={item.id}
          className="text-right"
          onClick={props.closer.bind(null,item.id)}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <h5 >{item.title}</h5>
            <p>{item.description}</p>
          </Card.Body>
        </Card>
    </ListGroup.Item>)
  return listItems;
}

export default ListTodos;