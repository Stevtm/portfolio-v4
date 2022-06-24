import RecentPic from "../../assets/images/steven-min.png";
import { FaInfoCircle } from "react-icons/fa";

// import styled components
import {
  Anchor,
  AboutSection,
  AboutHeader,
  HeaderText,
  AboutContent,
  TextAndButton,
  IntroText,
  AboutText,
  ContactButton,
  ProfilePic,
} from "./styles";

const About: React.FC = () => {
  return (
    <>
      <Anchor id={"about"}></Anchor>
      <AboutSection>
        <AboutHeader>
          <HeaderText>
            <FaInfoCircle style={{ paddingRight: "10px" }} />
            About Me
          </HeaderText>
        </AboutHeader>
        <AboutContent>
          <TextAndButton>
            <IntroText>Hi! I'm Steven.</IntroText>
            <AboutText>
              I like to solve problems and build visually appealing, responsive,
              and functional web applications. I've been developing web apps for
              over 4 years, and I recently earned a certificate in Full Stack
              Development from the University of Toronto Coding Bootcamp.
            </AboutText>
            <AboutText>
              I have experience using tools including the MERN stack,
              TypeScript, GraphQL, and styled-components, and I'm always looking
              to learn more! Feel free to reach out if you have any questions or
              comments about my projects or experience!
            </AboutText>
            <AboutText>
              I'm currently working as a software quality assurance anaylst
              after two years working with enterprise software and production
              equipment in the pharmaceutical and medical device industries. I
              write automated tests using Cypress and performing manual testing
              on new enhancements. Either way, my main focus is making sure that
              we deliver a functional, beautiful experience to our clients.
            </AboutText>
            <ContactButton>
              <a href="mailto:steventmaddison@outlook.com">Get in Touch</a>
            </ContactButton>
          </TextAndButton>
          <ProfilePic
            src={RecentPic}
            alt="Steven Maddison headshot"
          ></ProfilePic>
        </AboutContent>
      </AboutSection>
    </>
  );
};

export default About;
