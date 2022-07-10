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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3000' height='1300' preserveAspectRatio='none' viewBox='0 0 3000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1064&quot;)' fill='none'%3E%3Crect width='3000' height='1300' x='0' y='0' fill='rgba(28, 35, 39, 1)'%3E%3C/rect%3E%3Cpath d='M 0,601 C 120,522.2 360,199.6 600,207 C 840,214.4 960,634 1200,638 C 1440,642 1560,231.4 1800,227 C 2040,222.6 2160,637 2400,616 C 2640,595 2880,220.8 3000,122L3000 1300L0 1300z' fill='rgba(32, 39, 44, 1)'%3E%3C/path%3E%3Cpath d='M 0,1043 C 150,1018.6 450,912 750,921 C 1050,930 1200,1141.6 1500,1088 C 1800,1034.4 1950,671.2 2250,653 C 2550,634.8 2850,928.2 3000,997L3000 1300L0 1300z' fill='rgba(36, 44, 49, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1064'%3E%3Crect width='3000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
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
