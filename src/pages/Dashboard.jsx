import React from "react";
import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.gif";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetch } from "../helpers/firebase";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "primary" }}
        variant="h2"
        noWrap
      >
        ──── Dashboard ────
      </Typography>
      {isLoading && (
        <Box
          component="img"
          sx={{
            width: 40,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            cursor: "pointer",
          }}
          alt="cw"
          src={loadingGif}
        />
      )}

      {!isLoading && (
        <>
          <Container sx={{ marginTop: "4rem" }}>
            <Grid
              container
              justifyContent="center"
              spacing={4}
              sx={{ paddingTop: "2rem" }}
            >
              {blogList?.map((blogCard) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={4}
                  spacing={2}
                  key={blogCard.id}
                >
                  <BlogCard blogCard={blogCard} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Dashboard;
