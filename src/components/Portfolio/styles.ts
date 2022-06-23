import styled from "styled-components";

export const Anchor = styled.span`
  /* box model */
  display: block;
  height: calc(40px);
  margin-top: -40px;
  visibility: hidden;
`;

export const PortfolioSection = styled.section`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

  /* visual decorations */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1046&quot;)' fill='none'%3E%3Crect width='2000' height='1300' x='0' y='0' fill='rgba(59, 73, 82, 1)'%3E%3C/rect%3E%3Cpath d='M 0,140 C 133.4,117.4 400.2,38.8 667,27 C 933.8,15.2 1067.4,78.6 1334,81 C 1600.6,83.4 1866.8,47.4 2000,39L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,265 C 133.4,250.2 400.2,195.6 667,191 C 933.8,186.4 1067.4,245.4 1334,242 C 1600.6,238.6 1866.8,187.6 2000,174L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,293 C 133.4,316.8 400.2,402.2 667,412 C 933.8,421.8 1067.4,342 1334,342 C 1600.6,342 1866.8,398 2000,412L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,554 C 133.4,543 400.2,500.4 667,499 C 933.8,497.6 1067.4,554.4 1334,547 C 1600.6,539.6 1866.8,479 2000,462L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,603 C 133.4,617.2 400.2,677.6 667,674 C 933.8,670.4 1067.4,583.8 1334,585 C 1600.6,586.2 1866.8,661 2000,680L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,868 C 133.4,852.4 400.2,795 667,790 C 933.8,785 1067.4,852.6 1334,843 C 1600.6,833.4 1866.8,762.2 2000,742L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,974 C 133.4,958.4 400.2,898.6 667,896 C 933.8,893.4 1067.4,959.8 1334,961 C 1600.6,962.2 1866.8,913.8 2000,902L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,1034 C 133.4,1053.2 400.2,1120.8 667,1130 C 933.8,1139.2 1067.4,1079.2 1334,1080 C 1600.6,1080.8 1866.8,1123.2 2000,1134L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3Cpath d='M 0,1196 C 200,1213.4 600,1279.8 1000,1283 C 1400,1286.2 1800,1226.2 2000,1212L2000 1300L0 1300z' fill='rgba(62, 79, 67, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1046'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;

  > div {
    max-width: 1000px;
  }
`;

export const PortfolioHeader = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 25px 0 0 0;
  width: 100%;
`;

export const HeaderText = styled.h2`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 5px 0;

  /* typography */
  color: white;
  font-family: "Staatliches";
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 1;
`;
