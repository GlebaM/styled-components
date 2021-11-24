import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px var(--shadow-grey-light);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.9rem 3.8rem;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "rgba(0, 0, 0, 0.9)"};
  transition: opacity 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    box-shadow: 0 0 7px var(--shadow-grey-dark);
  }
`;
