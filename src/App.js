import React from "react";
import { setup } from "goober";
import Nav from "./components/nav";
import { useGithub } from "./context/github";
import Home from "./features/home";
import Commits from "./features/commits";

setup(React.createElement);

function App() {
  const { showResults, isFetching } = useGithub();

  return (
    <>
      <Nav />
      {showResults || isFetching ? <Commits /> : <Home />}
    </>
  );
}

export default App;
