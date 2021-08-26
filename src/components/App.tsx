// import modules
import { ThemeProvider } from "styled-components";
import MediaQuery from "react-responsive";

// import theme and global style
import { GlobalStyles } from "../global";
import { theme } from "../theme";

// import components
import About from "../components/About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MediaQuery maxWidth={670}>
					<About />
					<Portfolio />
					<Resume />
				</MediaQuery>
				<MediaQuery minWidth={671}>
					<About />
					<Portfolio />
					<Resume />
				</MediaQuery>
			</>
		</ThemeProvider>
	);
};

export default App;
