import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { movieApi } from "./api";
import { combineReducers } from 'redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import favoritesReducer from "./favorites";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'favoriteMovies']
  }

const rootReducer = combineReducers({
    auth: authReducer,
    favoriteMovies : favoritesReducer,
    [movieApi.reducerPath]: movieApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     auth: authReducer,
    //     [movieApi.reducerPath]: movieApi.reducer,
    // },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(movieApi.middleware),
    
});

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)

export default persistor
