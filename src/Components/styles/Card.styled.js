import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  align-items: center;
  background-color: inherit;
  border-radius: 15px;
  box-shadow: 0 2px 0.5rem var(--shadow-grey-light);
  padding: 3rem;
  margin: 3rem auto;
  gap: 1rem;
  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 6px 0.8rem var(--shadow-grey-middle);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export default StyledCard;
