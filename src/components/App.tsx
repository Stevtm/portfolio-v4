// import modules
import { ThemeProvider } from "styled-components";
import MediaQuery from "react-responsive";

// import theme and global style
import { GlobalStyles } from "../global";
import { theme } from "../theme";

// import components
import About from "../components/About";
import Portfolio from "./Portfolio";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MediaQuery maxWidth={670}>
					<About />
					<Portfolio />
				</MediaQuery>
				<MediaQuery minWidth={671}>
					<About />
					<Portfolio />
				</MediaQuery>
			</>
		</ThemeProvider>
	);
};

export default App;
