import react, {useState} from 'react';
import NewTodoForm from './NewTodoForm.jsx';
import Todo from './Todo.jsx';
import {v4 as uuid} from 'uuid';
import React from 'react';

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), task: 'Take pills'},
        {id: uuid(), task: 'Prep for A'},
        {id: uuid(), task: 'Breakfast with yogurt'}
    ];
    const {todos, setTodos} = useState(INITIAL_STATE);

    const addTodo = (task) => {
        let todosCopy = todos.map(t => ({...t}));
        todosCopy.push({id: uuid(), task});
        setTodos(todosCopy);
    }

    const deleteTodo = (id) => {
        let todosCopy = todos.map(t => ({...t}));
        todosCopy.filter(t => t.id !== id);
        setTodos(todosCopy);
    }

    return (
        <React.Fragment>
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(t => {
                <Todo key={t.id} id={t.id} task={t.task} deleteTodo={deleteTodo}/>
            })}
        </React.Fragment>
    )
}

export default TodoList;