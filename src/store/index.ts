import createSecureStore from "redux-persist-expo-securestore";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";

const storage = createSecureStore();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
