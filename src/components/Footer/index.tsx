// import github logo
import { FaGithub } from "react-icons/fa";

// import styled components
import { FooterContainer, Link } from "./styles";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<Link href="https://github.com/Stevtm/portfolio-v3" target="_blank">
				<FaGithub></FaGithub>
			</Link>
			Designed & Built <br></br>by Steven Maddison
		</FooterContainer>
	);
};

export default Footer;
