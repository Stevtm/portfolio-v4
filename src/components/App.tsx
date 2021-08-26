// import modules
import { ThemeProvider } from "styled-components";

// import theme file
import { theme } from "../theme";

// import components
import About from "../components/About";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div></div>
		</ThemeProvider>
	);
};

export default App;
