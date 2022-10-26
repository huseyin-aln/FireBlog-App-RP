import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddBlog } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import blok from "../assets/blok.png";
import Typography from "@mui/material/Typography";

const initialValues = { title: "", image: "", content: "" };

export default function NewBlog() {
  const [info, setInfo] = useState(initialValues);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    AddBlog(info);
    setInfo(initialValues);
    navigate("/");
  };

  const date = new Date().toString().split(" ").slice(0, 4);
  console.log(date);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setInfo({
      ...info,
      [name]: value,
      date: date,
      like: 3,
      comment: 2,
      author: currentUser.email,
    });
    // console.log(info);
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      marginTop="4rem"
      // onSubmit={handleSubmit}
    >
      <img src={blok} alt="blok" />

      <Typography
        variant="h4"
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "#232F3E" }}
      >
        ─── New Blog ───
      </Typography>

      <TextField
        autoComplete="given-title"
        id="title-input"
        label="Title"
        type="text"
        name="title"
        value={info.title}
        sx={{ width: "20rem" }}
        onChange={handleChange}
      />
      <TextField
        autoComplete="given-image"
        id="img-input"
        label="Image URL"
        type="text"
        name="image"
        value={info.image}
        sx={{ width: "20rem" }}
        onChange={handleChange}
      />

      <TextField
        autoComplete="given-content"
        id="content-input"
        label="Content"
        name="content"
        value={info.content}
        multiline
        rows={6}
        sx={{ width: "20rem" }}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{ width: "20rem", bgcolor: "#232F3E" }}
        onClick={handleSubmit}
      >
        Add New Blog
      </Button>
    </Box>
  );
}
