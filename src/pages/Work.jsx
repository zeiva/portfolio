import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { pagesState } from "../state";
import { BlogCard } from "../components";

const { work: content } = pagesState;

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const Work = () => {
  return (
    <PageContainer>
      <Typography variant="h1">{content.title}</Typography>
      {content.items.map((i) => (
        <BlogCard
          title={i.name}
          subtitle={i.date}
          description={i.description}
          imgSrc={i.imgSrc}
          destination={i.destination}
        />
      ))}
    </PageContainer>
  );
};

export default Work;
