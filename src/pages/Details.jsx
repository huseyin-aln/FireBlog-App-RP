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

const Details = () => {
  // const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const blogCard = useLocation();

  return (
    <Container maxWidth="md" sx={{ marginTop: "4rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={blogCard.state.image}
          alt="image"
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
      </Card>
    </Container>
  );
};

export default Details;
