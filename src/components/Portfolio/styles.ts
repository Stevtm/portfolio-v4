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
  background-color: ${({ theme }) => theme.pastelGreen.lighter};

  > div {
    max-width: 1000px;
  }
`;

export const ColorBar = styled.div`
  /* box model */
  width: 0.55rem;
  margin-right: 10px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.pastelGreen.DEFAULT};
`;

export const PortfolioHeader = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 25px 0;
  width: 100%;
`;

export const HeaderText = styled.h2`
  /* box model */
  margin: 5px 0;
  /* typography */
  color: ${({ theme }) => theme.pastelGreen.dark};
  font-family: "Staatliches";
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 1;
`;
