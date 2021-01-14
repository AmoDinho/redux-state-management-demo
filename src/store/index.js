import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import initialState from "../reducers/initialState";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  stateReconciler: autoMergeLevel2,
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const middleware = [thunk, reduxImmutableStateInvariant({ ignore: [] })];

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
