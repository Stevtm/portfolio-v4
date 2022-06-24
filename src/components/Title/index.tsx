// import icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// import styled components
import {
  TitleSection,
  TitleContainer,
  ColorBar,
  Name,
  Motto,
  Links,
  Link,
} from "./styles";

const Title: React.FC = () => {
  return (
    <TitleSection>
      <div style={{ marginTop: "20px" }}></div>
      <TitleContainer>
        <ColorBar></ColorBar>
        <div>
          <Name>
            Steven <br />
            <span>Maddison</span>
          </Name>
          <Motto>
            Full Stack Developer. Engineering Graduate. Lifelong Learner.
          </Motto>
        </div>
      </TitleContainer>
      <Links>
        <Link href="https://github.com/Stevtm" target="_blank">
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stevenmaddison/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.instagram.com/steeeeeeeeeeeeev/"
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </Links>
    </TitleSection>
  );
};

export default Title;
