import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogCard({ blogCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { author, content, date, image, title } = blogCard;

  // const date1 =
  //   blogCard.date[2] +
  //   " " +
  //   blogCard.date[1] +
  //   " " +
  //   blogCard.date[3] +
  //   " , " +
  //   blogCard.date[0];

  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => navigate("/details/" + id)}>
      <CardMedia
        component="img"
        height="194"
        image={blogCard.image}
        alt="image"
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
        <Typography variant="body2" color="text.secondary">
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
  );
}
