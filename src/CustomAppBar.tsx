import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ColorModeContext from "./ColorModeContext";

const CustomAppBar = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Customize of theme
          </Typography>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            <DarkModeIcon />
            <LightModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default CustomAppBar;
