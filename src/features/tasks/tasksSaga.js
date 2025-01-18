import { call, put, takeEvery, select, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "../getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* saveTasksInLocalStorageHandler() {
  const { tasks } = yield select(selectTasks);
  yield call(saveTasksInLocalStorageHandler, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
} 