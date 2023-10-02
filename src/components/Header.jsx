import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { appState } from "../state";

const Header = () => {
  const { header } = appState;
  return (
    <>
      <Box sx={{ height: "2rem" }} />
      <Box
        sx={{
          position: "fixed",
          top: "0",
          right: "0",
          backgroundColor: "white"
          // border: "3px dotted black"
          // boxShadow: "3px 3px 5px"
        }}
      >
        <nav>
          <Box sx={{ display: "flex", padding: "0.5rem", gap: "1.5rem" }}>
            {header.links.map((link) => (
              <Link to={link.destination}>{link.title}</Link>
            ))}
          </Box>
        </nav>
      </Box>
    </>
  );
};

export default Header;
