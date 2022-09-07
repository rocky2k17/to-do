import { takeLatest, put, all, call } from 'redux-saga/effects';

import { deleteTodoSaga ,addTodoSaga} from "./action";

export function* onAddTodoSaga({ payload }) {
    yield put(addTodoSaga(payload));
}

export function* onDeleteTodoSaga({ payload: { id } }) {
    yield put(deleteTodoSaga(id));
}

export function* onDelete() {
    yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

export function* onAdd() {
    yield takeLatest("ADD_TODO", onAddTodoSaga);
}

export function* todos() {
    yield all([call(onDelete), call(onAdd)]);
}