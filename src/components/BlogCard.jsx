import { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { AccountCircle } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Container } from "@mui/material";
// import moment from "moment";
import { toastErrorNotify } from "../helpers/toastNotify";
import placeholder from "../assets/placeholder.png";

export default function BlogCard({ blogCard }) {
  console.log(blogCard);

  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const { author, content, date, image, title } = blogCard;

  const handleClick = () => {
    navigate(`/details/${id}`, { state: blogCard });

    !currentUser && toastErrorNotify("Please log in to see detail!");
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 300, height: 500 }} onClick={handleClick}>
        <CardMedia
          component="img"
          image={image || placeholder}
          alt="image"
          sx={{
            maxWidth: 300,
            height: 200,
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
        <CardContent style={{ backgroundColor: "#efeefe", height: "150px" }}>
          <Typography
            variant="h5"
            component="h2"
            color="#046582"
            sx={{ fontFamily: "Girassol" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ fontFamily: "Girassol" }}
          >
            {date[1] + " " + date[2] + ", " + date[3]}
          </Typography>
          <Typography
            variant="body2"
            // color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {content}
          </Typography>
        </CardContent>

        <CardActions>
          <AccountCircle
            style={{ marginBottom: "0.35em", marginRight: "0.35em" }}
          />
          <Typography gutterBottom variant="h6" component="h2">
            {author}
          </Typography>
        </CardActions>

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
