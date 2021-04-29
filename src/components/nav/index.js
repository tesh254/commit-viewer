import { css } from "goober";
import { useGithub } from "../../context/github";
import { Logo, NavContainer, NavItems } from "../../styles";
import InputComponent from "../input";

export default function Nav() {
  const {
    isFetching,
    currentQuery,
    handleQueryChange,
    getCommits,
  } = useGithub();
  return (
    <NavContainer
      className={css`
        background: ${(currentQuery || isFetching) && "#EFF2F6"};
        height: 130px;

        @media only screen and (max-width: 600px) {
          height: fit-content;
        }
      `}
    >
      <section
        className={css`
          max-width: 1260px;
          margin: 0px auto;
          display: flex;
          justify-content: space-between;
          place-items: center;
          position: sticky;
          height: 100%;

          @media only screen and (max-width: 600px) {
            flex-wrap: wrap;
            padding: 16px 0px;
            height: auto;
            justify-content: ${currentQuery.length > 0
              ? "center"
              : "space-between"};
          }
        `}
      >
        <section onClick={() => handleQueryChange("")}>
          <Logo>CommitViewer</Logo>
        </section>
        <section className={``}>
          {isFetching || currentQuery.length > 0 ? (
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
                  display: none;
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
                onClick={getCommits}
              >
                See Commits {"🚀"}
              </button>
            </section>
          ) : (
            <NavItems>
              <li>About</li>
              <li> Contact</li>
            </NavItems>
          )}
        </section>
      </section>
    </NavContainer>
  );
}
