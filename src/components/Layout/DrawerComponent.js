import React from 'react';
import { Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Divider, Stack, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      top: 0,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: '#3E54A0',
      borderColor: '#fff',
    },
  },
  list: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stack: {
    backgroundColor: '#fff',
    height: 50,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    marginTop: 5,
  },
  listItemText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#3E54A0',
  },
}));

const drawerWidth = 240; // Adjust the width as needed

export default function DrawerComponent() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      variant="permanent"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
          3peas.com
        </Typography>
        <Stack className={classes.stack}>
          <Typography className={classes.listItemText}>Class</Typography>
        </Stack>
        <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 10 }}>
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="9th Class" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="10th Class" />
              </ListItemButton>
            </ListItem>
            {/* Add more List items as needed */}
          </List>
          <Divider sx={{ backgroundColor: '#fff', width: drawerWidth - 5 }} />
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="11th Class" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="12th Class" />
              </ListItemButton>
            </ListItem>
            {/* Add more List items as needed */}
          </List>
        </Stack>
      </Box>
    </Drawer>
  );
}