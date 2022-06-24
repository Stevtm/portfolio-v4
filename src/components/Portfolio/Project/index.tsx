// import components
import Tool from "./Tool";

// import interfaces
import { PortfolioItem } from "../../../utils/interfaces";

// import icons
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

// import styled components
import {
  ProjectContainer,
  ProjectHeader,
  ProjectTitle,
  Icons,
  ColorBar,
  ProjectContent,
  ProjectDesc,
  ProjectTools,
  Link,
} from "./styles";

// create interface for props
interface ProjectProps {
  info: PortfolioItem;
}

const Project: React.FC<ProjectProps> = ({ info }) => {
  const { title, desc, tools, github, link } = info;

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle>{title}</ProjectTitle>
        <Icons>
          <Link href={github} target="_blank">
            <FaGithub />
          </Link>
          {link && (
            <Link href={link} target="_blank">
              <BiLinkExternal />
            </Link>
          )}
        </Icons>
      </ProjectHeader>
      <ColorBar></ColorBar>
      <ProjectContent>
        <ProjectDesc>{desc}</ProjectDesc>
        <ProjectTools>
          {tools.map((tool) => {
            return <Tool info={tool} key={tool.id}></Tool>;
          })}
        </ProjectTools>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;
