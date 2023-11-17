import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { LuInbox } from "react-icons/lu";
import { MdOutlineDrafts } from "react-icons/md";

export default function NavList() {
  return (
    <Box sx={{ width: 250, color: "#000" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <LuInbox color="#000" fontSize="20px" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MdOutlineDrafts color="#000" fontSize="20px" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav>
      <Divider sx={{bgcolor: '#d3d3d3'}}/>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton componet='a'>
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
