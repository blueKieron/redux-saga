import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="App"><Home/></div>
    </Provider>
  );
}

export default App;
