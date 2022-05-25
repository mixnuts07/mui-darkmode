import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./CustomAppBar";
import ColorModeContext from "./ColorModeContext";
import { blueGrey, brown, grey } from "@mui/material/colors";
const App = () => {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: blueGrey,
                divider: blueGrey[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800]
                }
              }
            : {
                primary: brown,
                divider: brown[700],
                background: {
                  default: brown[900],
                  paper: brown[900]
                },
                text: {
                  primary: "#fff",
                  secondary: brown[500]
                }
              })
        }
      }),
    [mode]
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomAppBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
