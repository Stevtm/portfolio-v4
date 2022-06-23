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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1016&quot;)' fill='none'%3E%3Cpath d='M 0,922 C 200,835.6 600,419.8 1000,490 C 1400,560.2 1800,1116.4 2000,1273L2000 1300L0 1300z' fill='rgba(206, 214, 219, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1016'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
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
  background-color: ${({ theme }) => theme.pastelBlue.DEFAULT};
`;

export const Name = styled.h1`
  /* box model */
  margin: 0;

  /* typography */
  color: black;
  font-family: "Staatliches";
  font-size: 5.5rem;
  font-weight: 400;
  line-height: 1;

  span {
    color: ${({ theme }) => theme.pastelBlue.dark};
  }
`;

export const Motto = styled.h2`
  /* box model */
  padding-top: 10px;
  margin: 0;

  /* typography */
  color: ${({ theme }) => theme.darkGray};
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
    color: black;

    /* visual decorations */
    transition: 0.2s all ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.pastelBlue.dark};
    }
  }
`;
