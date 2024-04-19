import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Temporary data
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' },
// ];

//REDUCER
const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANT':
      return action.payload;
    default:
      return state;
  }
};

//SAGA
const sagaMiddleware = createSagaMiddleware();

//SAGA generator function
function* viewFlowerSaga() {
  try {
    console.log('Running FlowerSaga');
    const flowerResponse = yield axios.get('/api/plants');

    yield put({ type: 'SET_PLANT', payload: flowerResponse.data });
  } catch (error) {
    console.log('Flower GET request failed', error);
  }
}

function* addFlowerSaga(action) {
  try {
    console.log('Running FlowerSaga');
    const flowerResponse = yield axios.post(`/api/plants`, action.payload);

    yield put({ type: 'SET_PLANT', payload: flowerResponse.data });
  } catch (error) {
    console.log('Flower GET request failed', error);
  }
}

//SAGA generator function
function* watcherSaga() {
  yield takeEvery('GET_PLANT', viewFlowerSaga);
  yield takeEvery('POST_PLANT', addFlowerSaga);
}

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

export default store;
