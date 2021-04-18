import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";

import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics/index";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
