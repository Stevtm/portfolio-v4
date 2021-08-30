// import styled components
import { StyledBurger } from "./styles";

// create interface for props
interface BurgerProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
	return (
		<StyledBurger
			open={open}
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div></div>
			<div></div>
			<div></div>
		</StyledBurger>
	);
};

export default Burger;
