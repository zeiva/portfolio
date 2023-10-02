import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  color: theme.palette.primary.main,
  padding: "2rem",
  "&:visited": { color: theme.palette.primary.main }
}));

const Tile = ({ title, destination }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "4rem",
        boxShadow: "0 5px #666",
        width: "120px",
        "&:hover": { boxShadow: "none" }
      }}
      onClick={() => console.log(destination)}
    >
      <StyledLink to={destination}>
        <Typography>{title}</Typography>
      </StyledLink>
    </Box>
  );
};

export default Tile;
