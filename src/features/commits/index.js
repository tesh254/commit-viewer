import { css } from "goober";
import { useGithub } from "../../context/github";
import { Container } from "../../styles";

export default function Commits() {
  const { commits, isFetching, currentQuery } = useGithub();

  return (
    <Container>
      {isFetching ? (
        <section
          className={css`
            text-align: center;
          `}
        >
          <p
            className={css`
              color: #29335c;
              font-weight: 600px;
              font-size: 32px;
            `}
          >
            {currentQuery}
          </p>
          <p
            className={css`
              margin: 32px 0px;
              color: #18214D;
              font-size: 20px;
              font-weight: normal;
            `}
          >
            Loading...
          </p>
        </section>
      ) : (
        <section></section>
      )}
    </Container>
  );
}
