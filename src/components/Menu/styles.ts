import styled from "styled-components";

// create interface for menu props
interface StyledMenuProps {
	open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: whitesmoke;
	height: 100vh;
	width: 100%;
	text-align: center;
	padding: 2rem;
	position: fixed;
	top: 0;
	left: 0;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	transition: transform 0.3s ease-in-out;
	margin: 0 auto;
	z-index: 2;

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.pastelGreen.dark};
		text-decoration: none;
		transition: color 0.3s linear;
	}
`;
