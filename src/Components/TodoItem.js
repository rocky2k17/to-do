import React, {useState} from 'react';


const TodoItem =(todo)=>{
    console.log("todo",todo);
    return (
        <>
            <div className="row mx-2 align-items-center">
                <div>
                    #{Math.trunc((todo.id)*10)}
                </div>
                <div className='col-8'>
                    <h4> {todo.name} </h4>
                </div>

            </div>
        </>
    );
};

export default TodoItem;
