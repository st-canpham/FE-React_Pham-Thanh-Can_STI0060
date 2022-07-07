import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { 
  getProductsSuccess,
  getProductsFailed,
  getCategoriesSuccess,
  getCategoriesFailed
} from './home.actions';
import * as TYPES from '../../shared/constants/types';

const ENDPOINT = 'https://6088e20da6f4a300174271e7.mockapi.io';

export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/products`);
    yield put(getProductsSuccess(res.data));
  } catch (err) {
    yield put(getProductsFailed(err));
  }
};

export function* getCategories() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/categories`);
    yield put(getCategoriesSuccess(res.data));
  } catch (err) {
    yield put(getCategoriesFailed(err));
  }
};

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORIES, getCategories)
  ]);
};
