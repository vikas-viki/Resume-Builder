import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

const DetailFillingSidebar = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
        height: "fit-content",
      }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => props.setTab(0)}>
            <ListItemText
              primary="Personal Info"
              sx={props.tab === 0 ? { color: "rgb(0, 128, 255)" } : null}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => props.setTab(1)}>
            <ListItemText
              primary="Work Experience"
              sx={props.tab === 1 ? { color: "rgb(0, 128, 255)" } : null}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => props.setTab(2)}>
            <ListItemText
              primary="Education"
              sx={props.tab === 2 ? { color: "rgb(0, 128, 255)" } : null}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => props.setTab(3)}>
            <ListItemText
              primary="Key Skills"
              sx={props.tab === 3 ? { color: "rgb(0, 128, 255)" } : null}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DetailFillingSidebar;
