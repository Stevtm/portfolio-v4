import styled from "styled-components";

// create interface for menu props
interface StyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  /* typography */
  text-align: center;

  /* visual decorations */
  background: ${({ theme }) => theme.gunmetal};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;

export const MenuLinks = styled.div`
  /* box model */
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  /* typography */

  /* visual decorations */
`;

export const MenuLink = styled.a`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 2rem 0;

  /* typography */
  text-decoration: none;

  /* visual decorations */
  transition: color 0.3s linear;
`;

export const MenuItemNumber = styled.h4`
  /* box model */
  padding-right: 10px;
  margin: 0;

  /* typography */
  color: ${({ theme }) => theme.desertSand};
  font-size: 1.875rem;

  /* visual decorations */
`;

export const MenuItemText = styled.h4`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 5px 0;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};
  font-family: "Staatliches";
  font-size: 3rem;
  font-weight: 500;
  line-height: 1;

  /* visual decorations */
`;
