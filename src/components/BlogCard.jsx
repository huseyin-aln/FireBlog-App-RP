import { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Container } from "@mui/material";

export default function BlogCard({ blogCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = useContext(AuthContext);

  // const { author, content, date, image, title, id } = blogCard;

  // const date1 =
  //   blogCard.date[2] +
  //   " " +
  //   blogCard.date[1] +
  //   " " +
  //   blogCard.date[3] +
  //   " , " +
  //   blogCard.date[0];

  const handleClick = () => {
    navigate(`/details/${id}`, { state: blogCard });
    !currentUser && alert("Please log in to see detail");
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 300, height: 500 }} onClick={handleClick}>
        <CardMedia
          component="img"
          image={blogCard.image}
          alt="image"
          sx={{
            maxWidth: 300,
            height: 200,
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
            {blogCard.title}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontFamily: "Girassol" }}
          >
            {blogCard.date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {blogCard.content}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">{blogCard.author}</Typography>
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
}
