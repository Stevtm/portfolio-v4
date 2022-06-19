import styled from "styled-components";

export const TitleSection = styled.section`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 98vh;
  justify-content: space-between;
  padding: 0 20px;
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
  background-color: ${({ theme }) => theme.pastelGreen.DEFAULT};
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
    color: ${({ theme }) => theme.pastelGreen.dark};
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
      color: ${({ theme }) => theme.pastelGreen.dark};
    }
  }
`;
