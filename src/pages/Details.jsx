import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Container from "@mui/material/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DeleteBlog } from "../helpers/firebase";

const Details = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const blogCard = useLocation();

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "4rem",
        width: "80%",
        height: "40vh",
        margin: "50px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            image={blogCard.state.image}
            alt="image"
            sx={{
              maxWidth: 300,
              height: 250,
              objectFit: "contain",
              display: "block",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              sx={{ fontFamily: "Girassol" }}
            >
              {blogCard.state.title}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontFamily: "Girassol" }}
            >
              {blogCard.state.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blogCard.state.content}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">{blogCard.state.author}</Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment">
              <ChatBubbleIcon />
            </IconButton>
          </CardActions>

          <Box display="flex" justifyContent="center" gap={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                navigate(`/updateblog/${blogCard.state.id}`, {
                  state: blogCard,
                })
              }
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => DeleteBlog(blogCard.state.id)}
            >
              Delete
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Details;
