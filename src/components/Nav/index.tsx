import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import Burger from "../Burger";
import Menu from "../Menu";

// import styled components
import {
  Header,
  NavBar,
  NavItems,
  NavLink,
  NavItem,
  NavItemNumber,
  NavItemText,
} from "./styles";

const Nav: React.FC = () => {
  const [openBurger, setOpenBurger] = useState(false);

  useEffect(() => {
    if (openBurger === true) {
      document.body.setAttribute("style", "overflow: hidden");
    } else {
      document.body.setAttribute("style", "overflow: auto");
    }
  }, [openBurger]);

  return (
    <Header>
      <NavBar>
        <MediaQuery maxWidth={670}>
          <div>
            <Burger open={openBurger} setOpen={setOpenBurger}></Burger>
            <Menu open={openBurger} setOpen={setOpenBurger}></Menu>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={671}>
          <NavItems>
            <NavItem>
              <NavLink href="#about">
                <NavItemNumber>01.</NavItemNumber>
                <NavItemText>About Me</NavItemText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">
                <NavItemNumber>02.</NavItemNumber>
                <NavItemText>My Projects</NavItemText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#resume">
                <NavItemNumber>03.</NavItemNumber>
                <NavItemText>My Skills</NavItemText>
              </NavLink>
            </NavItem>
          </NavItems>
        </MediaQuery>
      </NavBar>
    </Header>
  );
};

export default Nav;
