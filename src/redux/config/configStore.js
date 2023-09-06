import { configureStore } from '@reduxjs/toolkit';
import reducer from '../modules/reducer';

const store = configureStore({ reducer: { reducer: reducer } });

export default store;
