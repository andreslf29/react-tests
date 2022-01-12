import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal, 
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        /*if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);*/
        if (!newTodoValue) {
            return null
        }
        addTodo(newTodoValue);
        setOpenModal(prevState => !prevState)
    };

    return (
        <form onSubmit = {onSubmit}>
            <label>Ingresa una tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Nuevo ToDo"
            />
            <div  className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>

            </div>

        
        </form>

    );
}

export {TodoForm};