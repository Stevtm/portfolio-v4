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

export const NavBar = styled.nav`
  /* box model */
  height: 8.5rem;
  width: 100%;
  background-color: rgb(36, 44, 49, 0.95);
  /* background-color: ${({ theme }) => theme.gunmetal}; */
  position: fixed;

  /* visual decorations */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.a`
  /* box model */
  height: 68px;
  left: 0;
  margin: 16px 20px;
  position: fixed;
  top: 0;
  width: 36px;

  /* typography */
  color: ${({ theme }) => theme.desertSand};

  /* visual decorations */

  @media (min-width: 671px) {
    margin: 16px 35px;
  }
`;

export const NavItems = styled.ul`
  /* box model */
  display: flex;
  flex-direction: row;
  height: 68px;
  margin: 0 20px;
  position: fixed;
  right: 0rem;
  top: 0rem;

  /* typography */

  /* visual decorations */
  list-style-type: none;
`;

export const NavItem = styled.li`
  /* box model */
  display: flex;
  margin: 0 15px;

  /* typography */

  /* visual decorations */
`;

export const NavLink = styled.a`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;

  /* typography */

  /* visual decorations */
  text-decoration: none;
`;

export const NavItemNumber = styled.p`
  /* box model */
  padding-right: 5px;
  margin: 0;

  /* typography */
  color: ${({ theme }) => theme.desertSand};
  font-size: 1.125rem;
  font-weight: 600;

  /* visual decorations */
`;

export const NavItemText = styled.p`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 5px 0;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};
  font-family: "Staatliches";
  font-size: 1.25rem;
  font-weight: 100;
  line-height: 1;

  /* visual decorations */
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.desertSand};
  }
`;
