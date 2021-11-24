import React from "react";
import StyledFooter from "../styles/Footer.styled";
import SocialIcons from "./SocialIcons";
import Container from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              If You have any questions, do not wait and feel free contact us 🌝
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
