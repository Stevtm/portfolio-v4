import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;

	@media (min-width: 671px) {
		height: 0;
	}
`;

export const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.lighter};

	@media (min-width: 671px) {
		padding-top: 60px;
	}
`;

export const AboutHeader = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	text-align: center;
	padding: 10px 0;
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.pastelBlue.dark};
	font-family: "Staatliches";
	font-size: 3.75rem;
	font-weight: 500;
	line-height: 1;

	/* visual decorations */
`;

export const AboutContent = styled.div`
	/* box model */
	align-items: center;
	border-top: 10px solid ${({ theme }) => theme.pastelBlue.DEFAULT};
	border-radius: 0px 0px 30px 30px;
	display: flex;
	flex-direction: column;
	padding: 15px;

	/* visual decorations */
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);

	@media (min-width: 1281px) {
		flex-direction: row;
	}
`;

export const TextAndButton = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const AboutText = styled.p`
	/* box model */
	padding: 0px 5px;
	margin: 10px 0;
	width: 100%;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const ContactButton = styled.button`
	/* box model */
	border: none;
	border-radius: 5px;
	padding: 8px 8px;
	margin: 10px auto;

	/* typography */
	color: white;
	font-size: 1.125rem;
	line-height: 1.75rem;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.dark};
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		background-color: ${({ theme }) => theme.pastelBlue.DEFAULT};
	}

	> a {
		/* typgraphy */
		color: white;
		text-decoration: none;
	}
`;

export const ProfilePic = styled.img`
	/* box model */
	border-radius: 40px;
	object-fit: cover;
	padding: 0 5px;
	margin: 10px 5px;
	width: 100%;

	@media (min-width: 1024px) {
		/* box model */
		width: 85%;
	}

	@media (min-width: 1150px) {
		/* box model */
		width: 80%;
		max-width: 400px;
	}

	@media (min-width: 1281px) {
		/* box model */
		height: 250px;
		width: 40%;
		max-width: 400px;
	}
`;
