import react from 'react';

const Todo = ({id, task, deleteTodo}) => {
    return (
        <div>
            {task}
            <button onClick={() => deleteTodo(id)} data-testid={task}>X</button>
        </div>
    )
};

export default Todo;