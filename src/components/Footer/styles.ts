import styled from "styled-components";

export const FooterContainer = styled.div`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 10px;
  width: 100%;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};

  /* visual decorations */
  background-color: ${({ theme }) => theme.gunmetal};
`;

export const Link = styled.a`
  /* box model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  /* typography */
  font-size: 2rem;

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
