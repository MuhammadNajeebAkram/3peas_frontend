import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, InboxIcon, MailIcon } from "@mui/material";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const drawerWidth = 150;


export default function DrawerComponent() {
  const router = useRouter();
  const [navItems, setNavItems] = useState([]);
  const API_URL = 'http://localhost:8000/api/';
  const listItems = [
    { id: 1, name: "9th Class" },
    { id: 2, name: "10th Class" },
    { id: 3, name: "11th Class" },
    { id: 4, name: "12th Class" },
  ];

  useEffect(() => {
    getClasses();
  }, []);

const getClasses = () => {
fetch(`${API_URL}classes`, {
          method: 'GET',
          
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
          })
          .then(data => {
            setNavItems([]);
            setNavItems(data.classes); // Assuming 'setClasses' is a state setter
            
          })
          .catch(error => console.error('Error fetching classes:', error));
}



  const onClickListButton = (class_id, name) => {
    router.push(`/subjects/${class_id}?class_name=${name}`);
  };

  return (
    <div>
      
      <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => onClickListButton(item.id, item.class_name)}>
                <ListItemText primary={item.class_name} sx={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  )
  
}

