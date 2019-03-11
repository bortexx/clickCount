import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { pingEpic } from "./1secclicker/clicker-reducer";

export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics(pingEpic));

  return store;
}

export default configureStore();
