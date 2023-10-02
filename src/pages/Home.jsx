import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Tile } from "../components";
import { pagesState } from "../state";

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const TileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));

const Home = () => {
  const pageContent = pagesState.home;
  const { title, subtitle, links } = pageContent;
  return (
    <PageContainer>
      <Typography color="primary" variant="h1" fontSize="5rem">
        {title}
      </Typography>
      {subtitle && <Typography variant="h2">{subtitle}</Typography>}
      {/* main section */}
      {/* subsection 1 */}
      <TileContainer sx={{ mt: "4rem" }}>
        {links.map((link) => (
          <Tile title={link.title} destination={link.destination} />
        ))}
      </TileContainer>
    </PageContainer>
  );
};

export default Home;
