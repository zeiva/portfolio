import "./styles.css";
import { Box, Typography } from "@mui/material";
import { Header, Tile } from "./components";
import { appState } from "./state";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, useLocation } from "react-router-dom";

// A7CCED uranus blue
// D6EEFF columbia blue 2
// F0B7B3 melon
// 7EA172 asperugs
// B0C6A9 light green
// 283D3B dark slate gray

const theme = createTheme({
  palette: {
    primary: {
      main: "#283D3B"
    },
    secondary: {
      main: "#D6EEFF"
    }
  }
});

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  const isAfternoon = new Date().getHours() > 11;
  const location = useLocation();
  const app = appState;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* TODO: COMPLETE HEADER */}
        {/* {location.pathname !== "/" && <Header />} */}
        {/* {isAfternoon && (
          <Typography color="secondary" variant="p1">
            good afternoon~
          </Typography>
        )} */}
        <Box sx={{ margin: "1rem" }}>
          <Outlet />
        </Box>
        {/* TODO: ADD FOOTER */}
      </div>
    </ThemeProvider>
  );
}
