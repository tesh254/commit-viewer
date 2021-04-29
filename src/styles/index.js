import { styled } from "goober";

export const Container = styled("section")`
  max-width: 1260px;
  margin: 0px auto;
  padding: 0px 10px;
  min-height: 100vh;
`;

export const NavContainer = styled("nav")`
  
`;

export const Logo = styled("p")`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #18214d;
  margin: 0px;
`;

export const NavItems = styled("ul")`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 8px;

  li {
    margin: 2px 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #18214d;
  }
`;

export const Title = styled("h1")`
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 80px;
  color: #18214d;
  margin: 0px;
`;

export const InputContainer = styled("section")`
  display: grid;
  grid-template-columns: 58px 1fr;
  grid-template-rows: 58px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: #dfe4ea;
  border-radius: 8px;

  section {
    display: flex;
    color: #29335c;
    place-items: center;
    justify-content: center;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    color: #18214d;

    &::placeholder {
      color: #b1b5c5;
    }

    &::-ms-input-placeholder {
      color: #b1b5c5;
    }
  }
`;
