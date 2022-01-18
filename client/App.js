import React from "react";
import AllProducts from "./components/AllProducts";
import history from './history'
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar history={history}/>
      <Routes />
    </div>
  );
};

export default App;
