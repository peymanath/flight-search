import { configureStore } from '@reduxjs/toolkit';
import FlightsReducer from './Flight/Flights';

export const store = configureStore({
    reducer: {
        flights: FlightsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
