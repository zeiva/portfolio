import "../styles.css";
import {
  Button,
  Box,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%"
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black"
}));

// TODO: make sure the usage of links is accessible
const BlogCard = ({ title, subtitle, description, imgSrc, destination }) => (
  <Box
    sx={{
      color: "primary",
      width: "400px"
    }}
  >
    <StyledLink to={destination}>
      <StyledImg src={imgSrc} />
    </StyledLink>
    <CardContent sx={{ textAlign: "left" }}>
      <StyledLink to={destination}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body">{subtitle}</Typography>
      </StyledLink>
      <p>
        <Typography variant="body">{description}</Typography>
      </p>
    </CardContent>
  </Box>
);

export default BlogCard;
