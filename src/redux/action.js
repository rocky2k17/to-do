export const addTodo =()=>({
    type: "ADD_TODO",
    payload: todo,
});

export const deleteTodo =()=>({
    type: "DELETE_TODO",
    payload: id,
});

export const updateTodo =()=>({
    type: "UPDATE_TODO",
    payload: todo,
});
export const addTodoSaga =()=>({
    type: "ADD_TODO_SAGA",
    payload: todo,
});
export const deleteTodoSaga =()=>({
    type: "DELETE_TODO_SAGA",
    payload: todo,
});
export const updateTodoSaga =()=>({
    type: "UPDATE_TODO_SAGA",
    payload: todo,
});


