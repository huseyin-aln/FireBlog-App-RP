import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UpdateBlogCard } from "../helpers/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import placeholder from "../assets/placeholder.png";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export default function UpdateBlog() {
  const blogCard = useLocation();

  const updateBlog = blogCard.state.state;
  console.log(updateBlog.id);

  const [newBlogTitle, setNewBlogTitle] = useState(updateBlog.title);
  const [newBlogImage, setNewBlogImage] = useState(updateBlog.image);
  const [newBlogContent, setNewBlogContent] = useState(updateBlog.content);

  const date = new Date().toString().split(" ").slice(0, 4);
  // console.log(date);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // console.log(currentUser);
  }, [currentUser]);

  const navigate = useNavigate();

  const editBlog = (e) => {
    e.preventDefault();
    const info = {
      title: newBlogTitle,
      image: newBlogImage,
      content: newBlogContent,
      date: date,
      author: currentUser.email,
      id: updateBlog.id,
    };

    UpdateBlogCard(info);

    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        // component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        marginTop="4rem"
        // onSubmit={handleSubmit}
      >
        <img src={updateBlog?.image || placeholder} alt="blok" />
        <Typography
          variant="h4"
          sx={{ fontFamily: "Girassol", textAlign: "center", color: "#232F3E" }}
        >
          ─── Update Blog ───
        </Typography>

        <form
          component="form"
          onSubmit={editBlog}
          noValidate
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // gap={4}
          style={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <TextField
            autoComplete="given-title"
            id="title-input"
            label="Title"
            type="text"
            name="title"
            value={newBlogTitle}
            sx={{ width: "20rem" }}
            onChange={(e) => setNewBlogTitle(e.target.value)}
          />
          <TextField
            autoComplete="given-image"
            id="img-input"
            label="Image URL"
            type="text"
            name="image"
            value={newBlogImage}
            sx={{ width: "20rem" }}
            onChange={(e) => setNewBlogImage(e.target.value)}
          />

          <TextField
            autoComplete="given-content"
            id="content-input"
            label="Content"
            name="content"
            value={newBlogContent}
            multiline
            rows={6}
            sx={{ width: "20rem" }}
            onChange={(e) => setNewBlogContent(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "20rem", bgcolor: "#232F3E" }}
          >
            Update
          </Button>
        </form>
      </Box>
    </Container>
  );
}
