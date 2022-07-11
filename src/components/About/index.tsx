import RecentPic from "../../assets/images/steven-min.png";

// import styled components
import {
  Anchor,
  AboutSection,
  AboutHeader,
  HeaderNumber,
  HeaderText,
  AboutContent,
  AboutInfo,
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
          <HeaderNumber>01.</HeaderNumber>
          <HeaderText>About Me</HeaderText>
        </AboutHeader>
        <AboutContent>
          <AboutInfo>
            <TextAndButton>
              <IntroText>Hi! I'm Steven.</IntroText>
              <AboutText>
                I like to solve problems and build visually appealing,
                responsive, and functional web apps. I've been developing web
                apps for over four years, and I recently earned a certificate in
                Full Stack Development from the University of Toronto Coding
                Bootcamp.
              </AboutText>
              <AboutText>
                Lately I've been working with TypeScript, React, Cypress,
                Node.js, and styled-components, and I'm always looking to learn
                more! Feel free to reach out if you have any questions or
                comments about my projects or experience!
              </AboutText>
              <AboutText>
                I'm currently working as a software quality assurance analyst
                after two years in engineering consulting. My focus is ensuring
                that we deliver a functional, beautiful user experience to our
                clients.
              </AboutText>
            </TextAndButton>
            <ProfilePic
              src={RecentPic}
              alt="Steven Maddison headshot"
            ></ProfilePic>
          </AboutInfo>
          <ContactButton>
            <a href="mailto:steventmaddison@outlook.com">Get in Touch</a>
          </ContactButton>
        </AboutContent>
      </AboutSection>
    </>
  );
};

export default About;
