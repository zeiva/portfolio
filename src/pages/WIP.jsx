import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import wip from "../assets/wip.png";

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem 2rem"
}));

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "600px",
  width: "100%"
}));

const WIPPage = () => {
  return (
    <PageContainer>
      <Typography variant="body">
        Thank you for visiting! We are still working on this page, please come
        back later :)
      </Typography>
      <Link to="/">
        <Typography>Back to homepage</Typography>
      </Link>
      <StyledImg src={wip} />
    </PageContainer>
  );
};

export default WIPPage;
