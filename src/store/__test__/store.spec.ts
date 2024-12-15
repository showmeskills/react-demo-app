import { rootReducer } from '../root-reducer';
import { configureStore } from '@reduxjs/toolkit';

describe('Redux store', () => {

  it('should configure the store correctly with rootReducer', () => {
    const newStore = configureStore({
      reducer: rootReducer,
    });

    expect(newStore.getState()).toBeDefined();
  });
});
