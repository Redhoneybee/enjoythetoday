import { configureStore } from "@reduxjs/toolkit"
import reducers from "./reducers/root";

const store = configureStore({ reducer: reducers });

export default store;