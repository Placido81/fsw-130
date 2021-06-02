import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../selections/media/mediaSlice';

export default configureStore({
  reducer: {
    media: mediaReducer,
  },
});