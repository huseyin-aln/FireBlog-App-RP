import { Card, CardContent, Typography } from "@mui/material";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";





export default function SimpleCard() {


  const { currentUser } = useContext(AuthContext);

  return (
    <div >
      <Card >
        <img
          src={currentUser?.photoURL}
          
          alt="profile"
        />
        <CardContent>
          <Typography
            
            color="textSecondary"
            gutterBottom
          >
            Display Name
          </Typography>
          <Typography variant="h5" component="h2">
            {currentUser?.displayName || "Not Found!"}
          </Typography>
          <Typography color="textSecondary">
            Email
          </Typography>
          <Typography variant="body2" component="p">
            {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
