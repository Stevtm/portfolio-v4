import RecentPic from "../../assets/images/steven-min.png";

// import styled components
import {
	Anchor,
	AboutSection,
	AboutHeader,
	HeaderText,
	AboutContent,
	TextAndButton,
	AboutText,
	ContactButton,
	ProfilePic,
} from "./styles";

const About: React.FC = () => {
	return (
		<>
			<Anchor id={"about"}></Anchor>
			<AboutSection>
				<AboutHeader>
					<HeaderText>About Me</HeaderText>
				</AboutHeader>
				<AboutContent>
					<TextAndButton>
						<AboutText>Hi! I'm Steven.</AboutText>
						<AboutText>
							I'm a full stack web developer who is passionate about solving
							problems and building visually appealing, responsive, and
							functional web applications. I have been developing web
							applications for over 3 years, and I recently earned a certificate
							in Full Stack Web Development from the University of Toronto
							Coding Bootcamp.
						</AboutText>
						<AboutText>
							I'm experienced using tools including MERN stack, TypeScript,
							GraphQL, and styled-components, and I'm always looking to learn
							more! Feel free to reach out if you have any questions or comments
							about my projects or experience!
						</AboutText>
						<ContactButton>
							<a href="mailto:steventmaddison@outlook.com">Get in Touch</a>
						</ContactButton>
					</TextAndButton>
					<ProfilePic
						src={RecentPic}
						alt="Steven Maddison headshot"
					></ProfilePic>
				</AboutContent>
			</AboutSection>
		</>
	);
};

export default About;
