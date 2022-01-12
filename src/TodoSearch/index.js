import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    /*Para recibir o actualizar el estado */
    /*const [searchValue, setSearchValue] = React.useState('');*/


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        /*Asigno el valor al estado actual */
        setSearchValue(event.target.value);
      };

    return (
        <input placeholder="Buscar tarea" 
            className="TodoSearch" 
            /**Tomo eñ Valor del estado */
            value={searchValue}
            onChange={onSearchValueChange}
        />
        
    );
}

export { TodoSearch };