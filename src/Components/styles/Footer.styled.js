import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 1.3rem;
  }

  p {
    padding-bottom: 1px;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding: 50px 0 40px;
    ul li {
      margin-bottom: 0.7rem;
    }
    p {
      padding-bottom: 1px;
      text-align: center;
    }
  }
`;

export default StyledFooter;
