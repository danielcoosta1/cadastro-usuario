import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 1rem;
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  width: 60%;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
