import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import About from "./components/about";
import Hero from "./components/hero";
function App() {
  return (
    <div className="bg-only1 h-screen w-screen">
      <div className="flex flex-col mx-auto max-w-10xl w-full h-full">
        <NavBar />
        <Hero />
        <Switch>
          <Route path={"/about"} component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
