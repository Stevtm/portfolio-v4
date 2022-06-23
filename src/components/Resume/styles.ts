import styled from "styled-components";

export const Anchor = styled.span`
  /* box model */
  display: block;
  height: calc(40px);
  margin-top: -40px;
  visibility: hidden;
`;

export const ResumeSection = styled.section`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

  /* visual decorations */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1057&quot;)' fill='none'%3E%3Crect width='2000' height='1300' x='0' y='0' fill='rgba(62, 79, 67, 1)'%3E%3C/rect%3E%3Cpath d='M 0,27 C 133.4,48.6 400.2,134.6 667,135 C 933.8,135.4 1067.4,27.6 1334,29 C 1600.6,30.4 1866.8,119.4 2000,142L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,194 C 133.4,215.2 400.2,294 667,300 C 933.8,306 1067.4,234.8 1334,224 C 1600.6,213.2 1866.8,241.6 2000,246L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,355 C 133.4,367.2 400.2,410.4 667,416 C 933.8,421.6 1067.4,384 1334,383 C 1600.6,382 1866.8,405.4 2000,411L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,597 C 133.4,584.8 400.2,538.8 667,536 C 933.8,533.2 1067.4,582 1334,583 C 1600.6,584 1866.8,549.4 2000,541L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,659 C 133.4,683.2 400.2,775 667,780 C 933.8,785 1067.4,692.2 1334,684 C 1600.6,675.8 1866.8,728 2000,739L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,897 C 133.4,884.2 400.2,831.6 667,833 C 933.8,834.4 1067.4,901.4 1334,904 C 1600.6,906.6 1866.8,857.6 2000,846L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,1112 C 133.4,1091.6 400.2,1021 667,1010 C 933.8,999 1067.4,1049.6 1334,1057 C 1600.6,1064.4 1866.8,1049 2000,1047L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3Cpath d='M 0,1203 C 200,1218.8 600,1289 1000,1282 C 1400,1275 1800,1190.8 2000,1168L2000 1300L0 1300z' fill='rgba(75, 63, 78, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1057'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;

  > div {
    max-width: 1000px;
  }
`;

export const ResumeHeader = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 10px 0;
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

export const ResumeText = styled.h3`
  /* typography */
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  padding: 0px 5px;
  margin: 10px 0;
`;

export const TechContainer = styled.div`
  /* box model */
  align-items: center;
  border-top: 10px solid ${({ theme }) => theme.pastelPurple.DEFAULT};
  border-radius: 0px 0px 30px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  margin: 0 auto;

  /* visual decorations */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
`;

export const Tech = styled.div`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
  width: 65px;
`;

export const Icons = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  /* typography */
  color: ${({ theme }) => theme.pastelPurple.dark};

  svg {
    /* box model */
    margin: 10px 10px;

    /* typography */
    font-size: 40px;
  }
`;

export const TechName = styled.p`
  /* box model */
  margin: 0;

  /* typography */
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
`;

export const ResumeButton = styled.button`
  /* box model */
  border: none;
  border-radius: 5px;
  padding: 8px 8px;
  margin: 10px auto;
  margin-top: 20px;

  /* typography */
  color: white;
  font-size: 1.125rem;
  line-height: 1.75rem;

  /* visual decorations */
  background-color: ${({ theme }) => theme.pastelPurple.dark};
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: ${({ theme }) => theme.pastelPurple.DEFAULT};
  }
`;

export const ResumeLink = styled.a`
  /* typography */
  text-decoration: none;
  color: white;
`;
