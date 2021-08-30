import styled from "styled-components";

// create interface for menu props
interface StyledMenuProps {
	open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
	/* box model */
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
	background: whitesmoke;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;

export const MenuLink = styled.a`
	/* box model */
	padding: 2rem 0;

	/* typography */
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 0.5rem;

	/* visual decorations */
	color: ${({ theme }) => theme.pastelGreen.dark};
	transition: color 0.3s linear;
`;
