import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  gap: 3rem;

  & > div,
  & > ul {
    padding: 0;
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 0rem;
  }
`;
