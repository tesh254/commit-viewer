import { css } from "goober";

export default function Tag({ label, onClick }) {
  return (
    <section
      className={css`
        padding: 8px 16px;
        background: #29335c;
        border-radius: 8px;
        width: fit-content;
        margin: 4px;
      `}
      onClick={() => onClick(label)}
    >
      <p
        className={css`
          margin: 0px;
          font-size: 16px;
          font-weight: 600px;
          color: #fff;
        `}
      >
        {label}
      </p>
    </section>
  );
}
