import { CssBaseline, MuiThemeProvider } from "@material-ui/core";

import { Navbar } from "./components/Navbar";
import Routes from "./routes/routes.page";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <Routes/>
    </MuiThemeProvider>
  );
}

export default App;
