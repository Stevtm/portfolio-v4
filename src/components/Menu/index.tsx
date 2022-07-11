// import styled components
import {
  StyledMenu,
  MenuLinks,
  MenuLink,
  MenuItemNumber,
  MenuItemText,
} from "./styles";

// create interface for props
interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MenuLinks>
        <MenuLink href="#about" onClick={() => setOpen(false)}>
          <MenuItemNumber>01.</MenuItemNumber>
          <MenuItemText>About Me</MenuItemText>
        </MenuLink>
        <MenuLink href="#portfolio" onClick={() => setOpen(false)}>
          <MenuItemNumber>02.</MenuItemNumber>
          <MenuItemText>My Projects</MenuItemText>
        </MenuLink>
        <MenuLink href="#resume" onClick={() => setOpen(false)}>
          <MenuItemNumber>03.</MenuItemNumber>
          <MenuItemText>My Skills</MenuItemText>
        </MenuLink>
      </MenuLinks>
    </StyledMenu>
  );
};

export default Menu;
