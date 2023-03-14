import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import About from "./layout/about";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
  return (
    <div className="bg-only1 h-screen w-screen">
      <div className="flex flex-col mx-auto max-w-10xl w-full h-full">
        
        <Switch>
          <Route path={"/"} component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
