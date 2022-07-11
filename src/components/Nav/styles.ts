import styled from "styled-components";

export const Header = styled.header`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0;
  position: fixed;
  width: 100%;
`;

export const CollapsedContainer = styled.div`
  /* box model */
  height: 8.5rem;
  width: 100%;
  background-color: rgb(36, 44, 49, 0.95);
  /* background-color: ${({ theme }) => theme.gunmetal}; */
  position: fixed;

  /* visual decorations */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
`;

export const NavBar = styled.ul`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  width: 50%;

  /* visual decorations */
  list-style: none;
`;

export const NavTitle = styled.li`
  /* box model */
  border-radius: 10px;
  padding: 5px 5px;
  margin: 8px 0;

  /* typography */
  color: black;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;

  /* visual decorations */
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};

    a {
      color: white;
    }
  }
`;

export const NavLink = styled.a`
  /* visual decorations */
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
`;
