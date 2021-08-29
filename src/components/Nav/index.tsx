import { useState, useEffect } from "react";

import Burger from "../Burger";
import Menu from "../Menu";
import { ReactComponent as SLogo } from "../../assets/images/Logo.svg";

// import styled components
import { Header, CollapsedContainer, Logo } from "./styles";

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
			<CollapsedContainer>
				<Logo href="/">
					<SLogo></SLogo>
				</Logo>
				<div>
					<Burger open={openBurger} setOpen={setOpenBurger}></Burger>
					<Menu open={openBurger} setOpen={setOpenBurger}></Menu>
				</div>
			</CollapsedContainer>
		</Header>
	);
};

export default Nav;
