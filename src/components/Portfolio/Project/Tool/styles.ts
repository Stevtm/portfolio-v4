import styled from "styled-components";

export const ToolBubble = styled.div`
  /* box model */
  border-radius: 7px;
  padding: 5px 8px;
  margin: 5px 5px;

  /* typography */
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;

  /* visual decorations */
  background-color: ${({ theme }) => theme.desertSand};
`;
