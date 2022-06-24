import styled from "styled-components";

export const ProjectContainer = styled.div`
  /* box model */
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin: 20px 0;
  width: 100%;
`;

export const ProjectHeader = styled.div`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 0;

  /* typography */
  font-family: "Staatliches";

  /* visual decorations */
  color: ${({ theme }) => theme.floralWhite};
`;

export const ProjectTitle = styled.h1`
  /* box model */
  margin: 0;
  /* typography */
  font-size: 1.5rem;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const Icons = styled.div``;

export const ColorBar = styled.div`
  /* box model */
  height: 10px;
  width: 100%;
  margin-right: 10px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.polishedPine};
`;

export const ProjectContent = styled.div`
  /* box model */
  padding: 10px;
  border-radius: 0 0 10px 10px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.floralWhite};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
`;

export const ProjectDesc = styled.p`
  /* box model */
  margin: 10px 0;

  /* typography */
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const ProjectTools = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Link = styled.a`
  /* box model */
  margin: 0 5px;

  svg {
    /* typography */
    color: ${({ theme }) => theme.floralWhite};
    font-size: 30px;

    /* visual decorations */
    transition: 0.2s all ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.ashGray};
    }
  }
`;
