import React from "react";
import { css } from "goober";
import { Container, Title } from "../../styles";
import Tag from "../../components/tag";
import InputComponent from "../../components/input";
import { useGithub } from "../../context/github";

export default function Home() {
  const { trending, handleQueryChange, currentQuery, getCommits } = useGithub();

  function onTagClick(query) {
    handleQueryChange(query);
    getCommits();
  }
  return (
    <Container>
      <section
        className={css`
          text-align: center;
          max-width: 540px;
          margin: 60px auto 0px auto;
          padding: 0px 4px;

          @media only screen and (max-width: 600px) {
            margin: 0px auto;
          }
        `}
      >
        <Title>Discover the world of code</Title>
        <p
          className={css`
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            letter-spacing: -0.4px;
            color: #3e4462;
          `}
        >
          Explore open source projects from GitHub, and read their commit
          history to see the story of how they were built.
        </p>
      </section>
      <section
        className={css`
          display: grid;
          grid-template-columns: 1fr 210px;
          grid-template-rows: 58px;
          grid-column-gap: 8px;
          grid-row-gap: 0px;
          max-width: 920px;
          margin: 0px auto;

          @media only screen and (max-width: 600px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 58px);
            grid-column-gap: 0px;
            grid-row-gap: 8px;
            max-width: 920px;
            margin: 0px auto;
          }
        `}
      >
        <InputComponent
          value={currentQuery}
          onChange={(e) => {
            const VALUE = e.target.value;

            handleQueryChange(VALUE);
          }}
          placeholder="E.g. facebook/react"
        />
        <button
          className={css`
            font-size: 20px;
            color: #fff;
            font-weight: 600px;
            width: 100%;
            height: 100%;
            background: #f3663f;
            border-radius: 8px;
            border: none;
            cursor: pointer;

            &::hover {
              opacity: 0.7;
            }
          `}
        >
          See Commits {"🚀"}
        </button>
      </section>
      <section
        className={css`
          text-align: center;
          display: flex;
          justify-content: center;
        `}
      >
        <section>
          <p>Or pick one of these suggested repos</p>
          <section
            className={css`
              display: flex;
              flex-wrap: wrap;

              @media only screen and (max-width: 600px) {
                justify-content: center;

                section {
                  margin: 4px auto;
                }
              }
            `}
          >
            {trending.map((item) => {
              return (
                <Tag
                  label={`${item.owner.login}/${item.name}`}
                  onClick={onTagClick}
                />
              );
            })}
          </section>
        </section>
      </section>
    </Container>
  );
}
