import { Octokit } from "@octokit/rest";
import React, { useState, useEffect, useContext, createContext } from "react";

const octokit = new Octokit();

export const GithubContext = createContext({
  commits: [],
  isFetching: [],
  trending: [],
  currentQuery: "",
  getCommits: () => {},
  handleQueryChange: () => {},
  error: "",
  onSelect: () => {},
});

export function GithubProvider(props) {
  const [trending, setTrending] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [commits, setCommits] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  function getDate(value) {
    const d = new Date();

    d.setDate(d.getDate() - value);

    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;

    return `${d.getFullYear()}-${month}-${d.getDate()}`;
  }

  function getTrendingRepos() {
    octokit
      .request("GET /search/repositories", {
        q: `created:>${getDate(7)}`,
        sort: "stars",
        order: "desc",
        per_page: 4,
      })
      .then((res) => {
        setTrending(() => [...res.data.items]);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getTrendingRepos();
  }, []);

  function getRepoCommits() {
    setError("");
    setFetching(true);

    const [owner, repo] = currentQuery.split("/");

    if (owner && repo) {
      octokit
        .request(`GET /repos/{owner}/{repo}/commits`, {
          owner,
          repo,
        })
        .then((res) => {
          setFetching(false);
          setCommits(() => [...res.data]);
        })
        .catch((err) => {
          setFetching(false);
          setError("No commits found");
        });
    }
  }

  function onTagSelect(query) {
    setCurrentQuery(query);
    setFetching(true);

    const [owner, repo] = query.split("/");

    if (owner && repo) {
      octokit
        .request(`GET /repos/{owner}/{repo}/commits`, {
          owner,
          repo,
        })
        .then((res) => {
          setFetching(false);
          setCommits(() => [...res.data]);
        })
        .catch((err) => {
          setFetching(false);
          setError("No commits found");
        });
    }
  }

  return (
    <GithubContext.Provider
      value={{
        commits,
        trending,
        currentQuery,
        isFetching: fetching,
        getCommits: getRepoCommits,
        handleQueryChange: setCurrentQuery,
        onSelect: onTagSelect,
        error,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export function useGithub() {
  return useContext(GithubContext);
}
