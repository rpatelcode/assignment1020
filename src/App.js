import React from "react";

import LoginForm from "./components/other/LoginForm";
// import Excel from "./components/other/Excel";

import { StateMachineProvider, createStore } from "little-state-machine";
import yourDetails from "./states/yourDetails";

createStore({
  yourDetails
});

function App() {
  return (
    <StateMachineProvider>
      {/* <Excel /> */}
      <LoginForm />
    </StateMachineProvider>
  );
}

export default App;
