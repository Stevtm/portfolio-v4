import ResumePDF from "../../assets/documents/Resume_08Aug2021.pdf";
import { FaToolbox } from "react-icons/fa";

// import styled components
import {
  Anchor,
  ResumeSection,
  ResumeHeader,
  HeaderText,
  ResumeText,
  TechContainer,
  Tech,
  Icons,
  TechName,
  ResumeButton,
  ResumeLink,
} from "./styles";

// import icons
import { FaReact, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiJest,
  SiJquery,
  SiFirebase,
  SiStyledComponents,
  SiJavascript,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

const Resume = () => {
  return (
    <>
      <Anchor id={"resume"}></Anchor>
      <ResumeSection>
        <ResumeHeader>
          <HeaderText>
            <FaToolbox style={{ paddingRight: "10px" }} />
            Résumé
          </HeaderText>
        </ResumeHeader>
        <TechContainer>
          <ResumeText>
            These are some of the technologies I've been working with recently:
          </ResumeText>
          <Icons>
            <Tech>
              <SiJavascript title="JavaScript"></SiJavascript>
              <TechName>JavaScript</TechName>
            </Tech>
            <Tech>
              <SiTypescript title="TypeScript"></SiTypescript>
              <TechName>TypeScript</TechName>
            </Tech>
            <Tech>
              <FaHtml5 title="HTML5"></FaHtml5>
              <TechName>HTML5</TechName>
            </Tech>
            <Tech>
              <FaCss3 title="CSS3"></FaCss3>
              <TechName>CSS3</TechName>
            </Tech>
            <Tech>
              <FaReact title="React"></FaReact>
              <TechName>React</TechName>
            </Tech>
            <Tech>
              <SiRedux title="Redux"></SiRedux>
              <TechName>Redux</TechName>
            </Tech>
            <Tech>
              <SiTailwindcss title="Tailwind CSS"></SiTailwindcss>
              <TechName>Tailwind CSS</TechName>
            </Tech>
            <Tech>
              <SiStyledComponents title="styled-components"></SiStyledComponents>
              <TechName>styled-components</TechName>
            </Tech>
            <Tech>
              <SiJquery title="jQuery"></SiJquery>
              <TechName>jQuery</TechName>
            </Tech>
            <Tech>
              <FaNodeJs title="Node.js"></FaNodeJs>
              <TechName>Node.js</TechName>
            </Tech>
            <Tech>
              <SiMongodb title="MongoDB"></SiMongodb>
              <TechName>MongoDB</TechName>
            </Tech>
            <Tech>
              <SiMysql title="MySQL"></SiMysql>
              <TechName>MySQL</TechName>
            </Tech>
            <Tech>
              <SiGraphql title="GraphQL"></SiGraphql>
              <TechName>GraphQL</TechName>
            </Tech>
            <Tech>
              <SiJest title="Jest"></SiJest>
              <TechName>Jest</TechName>
            </Tech>
            <Tech>
              <SiFirebase title="Firebase"></SiFirebase>
              <TechName>Firebase</TechName>
            </Tech>
          </Icons>
          <ResumeButton>
            <ResumeLink href={ResumePDF} target="_blank">
              Download My Full Résumé
            </ResumeLink>
          </ResumeButton>
        </TechContainer>
      </ResumeSection>
    </>
  );
};

export default Resume;
