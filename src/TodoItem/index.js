import React from 'react';
import { Icon } from '@iconify/react';
import './TodoItem.css';

function TodoItem(props){
    return (
        <li className="TodoItem">
             <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
             </p>
             <Icon icon="line-md:confirm" inline={true} 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
             />
             <Icon icon="ant-design:delete-outlined" inline={true} 
                 className="Icon Icon-delete"
                 onClick={props.onDelete}
             />
        </li>
    );
}

export { TodoItem };