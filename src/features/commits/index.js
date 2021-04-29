import { css } from "goober";
import { useGithub } from "../../context/github";
import { Container } from "../../styles";

export default function Commits() {
  const { commits, isFetching, currentQuery, error } = useGithub();

  function formatHours(date) {
    const newDate = new Date(date);

    const month =
      newDate.getMonth() < 9
        ? `0${newDate.getMonth() + 1}`
        : newDate.getMonth() + 1;

    return `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getDate()}/${month}/${newDate.getFullYear()}`;
  }

  return (
    <Container>
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
            color: #18214d;
            font-size: 20px;
            font-weight: normal;
          `}
        >
          {isFetching ? (
            "Loading..."
          ) : error.length > 0 ? (
            error
          ) : (
            <section>
              {commits.map((item) => {
                return (
                  <section
                    key={item.sha}
                    className={css`
                      margin-bottom: 32px;
                      @media only screen and (max-width: 600px) {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: max-content 64px;
                        grid-column-gap: 8px;
                        grid-row-gap: 0px;
                      }
                    `}
                  >
                    <section
                      className={css`
                        display: none;
                        @media only screen and (max-width: 600px) {
                          display: block;
                        }
                      `}
                    >
                      <p
                        className={css`
                          margin: 0px;
                          text-align: left;
                        `}
                      >
                        {item.commit?.message}
                      </p>
                    </section>
                    <section
                      className={css`
                        display: grid;
                        grid-template-columns: 160px 1fr 166px;
                        grid-template-rows: max-content;
                        grid-column-gap: 8px;
                        grid-row-gap: 0px;

                        @media only screen and (max-width: 600px) {
                          display: flex;
                          justify-content: space-between;
                        }
                      `}
                    >
                      <section
                        className={css`
                          display: grid;
                          grid-template-columns: auto;
                          grid-template-rows: 60px 32px;
                          grid-column-gap: 8px;
                          grid-row-gap: 0px;

                          @media only screen and (max-width: 600px) {
                            display: flex;
                            place-items: center;
                          }
                        `}
                      >
                        <img
                          src={item.committer?.avatar_url}
                          alt={item.committer?.login}
                          className={css`
                            width: 60px;
                            border-radius: 50%;
                            margin: auto;
                          `}
                        />
                        <p
                          className={css`
                            margin: 4px 0px;
                            color: #18214d;
                            font-size: 22px;
                          `}
                        >
                          {item.committer?.login}
                        </p>
                      </section>
                      <section
                        className={css`
                          display: flex;
                          place-items: center;

                          @media only screen and (max-width: 600px) {
                            display: none;
                          }
                        `}
                      >
                        {item.commit?.message}
                      </section>
                      <section>
                        {formatHours(item.commit?.committer?.date)}
                      </section>
                    </section>
                  </section>
                );
              })}
            </section>
          )}
        </p>
      </section>
    </Container>
  );
}
