import React from "react";

// import LoginForm from "./components/other/LoginForm";
import Excel from "./components/other/Excel";

import { StateMachineProvider, createStore } from "little-state-machine";
import yourDetails from "./states/yourDetails";

// setStorageType(window.localStorage);

createStore({
  yourDetails
});

function App() {
  return (
    <StateMachineProvider>
      <Excel />
      {/* <FormEnter /> */}
    </StateMachineProvider>
  );
}

export default App;
