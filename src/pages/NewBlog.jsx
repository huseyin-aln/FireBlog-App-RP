import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddBlog } from "../helpers/firebase";

const initialValues = { title: "", imageUrl: "", content: "" };

export default function NexBlog() {
  const [info, setInfo] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setInfo({ ...info, [name]: value });
    // console.log(info);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    AddBlog(info);
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
        name="imageUrl"
        value={info.imageUrl}
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
        sx={{ width: "20rem" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}
