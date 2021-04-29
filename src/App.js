import React from "react";
import { setup } from "goober";
import Nav from "./components/nav";
import { useGithub } from "./context/github";
import Home from "./features/home";
import Commits from "./features/commits";

setup(React.createElement);

function App() {
  const { currentQuery } = useGithub();

  return (
    <>
      <Nav />
      {currentQuery ? <Commits /> : <Home />}
    </>
  );
}

export default App;
