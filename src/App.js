import React from "react";

import LoginForm from "./components/other/LoginForm";

import {
  StateMachineProvider,
  createStore,
  setStorageType
} from "little-state-machine";
import yourDetails from "./states/yourDetails";

// setStorageType(window.localStorage);

createStore({
  yourDetails
});

function App() {
  return (
    <StateMachineProvider>
      <LoginForm />
      {/* <Form /> */}
    </StateMachineProvider>
  );
}

export default App;
