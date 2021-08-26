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
							functional web applications. I love programming because it lets me
							solve problems.
						</AboutText>
						<AboutText>
							Whether it's creating a web app to log my workout data or using
							code to perform biomechanical analysis, I look forward to taking a
							challenge and solving it.
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
