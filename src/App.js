import React from "react";

import LoginForm from "./components/other/LoginForm";
// import FormEnter from "./components/other/FormEnter";

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
      {/* <FormEnter /> */}
    </StateMachineProvider>
  );
}

export default App;
