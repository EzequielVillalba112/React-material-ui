import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavList from "./NavList";
import { useState } from "react";
import {} from "react-icons";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#1B93B1" }}>
        <Toolbar>
          <IconButton
            size="large"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IoMenu color="#fff" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
            News
          </Typography>
          <Button color="inherit" sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ color: "#fff" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(!open)}>
        <NavList />
      </Drawer>
    </>
  );
}
