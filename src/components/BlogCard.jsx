import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function BlogCard({ blogCard }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={blogCard.imageUrl}
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
        <Typography variant="body2" color="text.secondary">
          {blogCard.content}
        </Typography>
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
