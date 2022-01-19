import React from "react";
import history from "./history";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar history={history} />
      <Routes />
    </div>
  );
};

export default App;
