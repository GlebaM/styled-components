import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledSocialIcons } from "../styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FaGithub />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
