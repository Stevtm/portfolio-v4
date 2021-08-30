// import styled components
import { StyledMenu, MenuLink } from "./styles";

// create interface for props
interface MenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<MenuLink href="#about" onClick={() => setOpen(false)}>
				About Me
			</MenuLink>
			<MenuLink href="#portfolio" onClick={() => setOpen(false)}>
				Portfolio
			</MenuLink>
			<MenuLink href="#resume" onClick={() => setOpen(false)}>
				Résumé
			</MenuLink>
		</StyledMenu>
	);
};

export default Menu;
