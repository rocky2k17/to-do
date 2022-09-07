import '../App.css'; 
import React, { useState } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';

const TodoItem = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const[name, setName] = useState(todo.name);
    console.log("todo =>", todo);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div>
                    #{Math.trunc((todo.id) * 10)}
                </div>
                <div className="col-8">
                    {edit ? (
                        <input 
                        type ="text"
                        onChange={(e) => setName(e.target.value)}
                        className ="form-control"
                        value={name}
                        />
                    ):(
                        <h4>{todo.name}</h4>
                    )}
                </div>
                <Button onClick={() => {
                    if(edit)
                    {
                        setName(todo.name);
                        dispatch(updateTodo({
                            ...todo,
                            name:name,
                        }))
                    }
                    setEdit(!edit)}} type="primary" >{edit ? "Update" : "Edit"}</Button>
                <Button type='primary' onClick={() => dispatch(deleteTodo({ id: todo.id }))} danger>
                    Delete
                </Button>
            </div>
        </>
    );
};

export default TodoItem;
