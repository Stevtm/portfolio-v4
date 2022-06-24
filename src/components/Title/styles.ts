import styled from "styled-components";

export const TitleSection = styled.section`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 98vh;
  justify-content: space-between;
  padding: 0 20px;

  /* visual decorations */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1024&quot;)' fill='none'%3E%3Crect width='2000' height='1300' x='0' y='0' fill='rgba(101, 107, 110, 1)'%3E%3C/rect%3E%3Cpath d='M 0,425 C 100,366.8 300,161.4 500,134 C 700,106.6 800,275.6 1000,288 C 1200,300.4 1300,202.6 1500,196 C 1700,189.4 1900,243.2 2000,255L2000 1300L0 1300z' fill='rgba(79, 86, 90, 1)'%3E%3C/path%3E%3Cpath d='M 0,478 C 80,521 240,668.4 400,693 C 560,717.6 640,580 800,601 C 960,622 1040,829.2 1200,798 C 1360,766.8 1440,441.8 1600,445 C 1760,448.2 1920,740.2 2000,814L2000 1300L0 1300z' fill='rgba(57, 65, 69, 1)'%3E%3C/path%3E%3Cpath d='M 0,1239 C 100,1186.4 300,993.8 500,976 C 700,958.2 800,1166.4 1000,1150 C 1200,1133.6 1300,877.8 1500,894 C 1700,910.2 1900,1163.6 2000,1231L2000 1300L0 1300z' fill='rgba(36, 44, 49, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1024'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleContainer = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ColorBar = styled.div`
  /* box model */
  width: 1rem;
  margin-right: 10px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.polishedPine};
`;

export const Name = styled.h1`
  /* box model */
  margin: 0;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};
  font-family: "Staatliches";
  font-size: 5.5rem;
  font-weight: 400;
  line-height: 1;

  span {
    color: ${({ theme }) => theme.desertSand};
  }
`;

export const Motto = styled.h2`
  /* box model */
  padding-top: 10px;
  margin: 0;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 2.25rem;
`;

export const Links = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0;
  margin-bottom: 20px;

  @media (min-width: 671px) {
    // margin-bottom: 60px;
  }
`;

export const Link = styled.a`
  /* box model */
  padding: 0 10px;

  /* typography */
  font-size: 2.5rem;

  svg {
    /* typography */
    color: ${({ theme }) => theme.floralWhite};

    /* visual decorations */
    transition: 0.2s all ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.ashGray};
    }
  }
`;
