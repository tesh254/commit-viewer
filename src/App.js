import React from "react";
import { setup, css } from "goober";
import { Container, Title } from "./styles";
import Nav from "./components/nav";
import Tag from "./components/tag";
import InputComponent from "./components/input";
import { useGithub } from "./context/github";
import Home from "./features/home";
import Commits from "./features/commits";

setup(React.createElement);

function App() {
  const { trending, handleQueryChange, currentQuery, getCommits } = useGithub();

  function onTagClick(query) {
    handleQueryChange(query);
    getCommits();
  }

  return (
    <>
      <Nav />
      {currentQuery ? <Commits /> : <Home />}
    </>
  );
}

export default App;
