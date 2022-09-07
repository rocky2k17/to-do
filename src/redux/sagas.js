import {takeLatest, put, all, call} from 'redux-saga/effects';

import { deleteTodoSaga } from "./action";


export function* onDeleteTodoSaga({payload:{id}}){
    yield put(deleteTodoSaga(id));
}

export function* onDelete(){
    yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

export function* todos(){
    yield all([call(onDelete)]);
}