import Project from "./Project";
import { portfolioInfo } from "../../utils/portfolio-info";

// import styled components
import {
  Anchor,
  PortfolioHeader,
  PortfolioSection,
  HeaderNumber,
  HeaderText,
} from "./styles";

const Portfolio: React.FC = () => {
  return (
    <>
      <Anchor id={"portfolio"}></Anchor>
      <PortfolioSection>
        <PortfolioHeader>
          <HeaderNumber>02.</HeaderNumber>
          <HeaderText>My Projects</HeaderText>
        </PortfolioHeader>
        {portfolioInfo.map((info) => {
          return <Project info={info} key={info.id}></Project>;
        })}
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
