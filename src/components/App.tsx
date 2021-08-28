// import modules
import { ThemeProvider } from "styled-components";
import MediaQuery from "react-responsive";
import styled from "styled-components";

// import theme and global style
import { GlobalStyles } from "../global";
import { theme } from "../theme";

// import components
import Title from "../components/Title";
import About from "../components/About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";

const Grid = styled.div`
	/* box model */
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Content = styled.div`
	height: 100vh;
	overflow-y: scroll;
`;

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MediaQuery maxWidth={670}>
					<Title />
					<About />
					<Portfolio />
					<Resume />
					<Footer />
				</MediaQuery>
				<MediaQuery minWidth={671}>
					<Grid>
						<Title />
						<Content>
							<About />
							<Portfolio />
							<Resume />
							<Footer />
						</Content>
					</Grid>
				</MediaQuery>
			</>
		</ThemeProvider>
	);
};

export default App;
