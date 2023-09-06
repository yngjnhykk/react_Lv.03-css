import { configureStore } from '@reduxjs/toolkit';
import reducer from './src/redux/modules/reducer';

const store = configureStore({ reducer: reducer });

export default store;
