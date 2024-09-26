import { Inter } from "next/font/google";
import "@/styles/globals.module.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "@/components/Layout/DrawerComponent";
import { useState } from "react";
import { useRouter } from "next/router";
import LinkPath from '@/components/LinkPath'; // Import the Breadcrumb component


const inter = Inter({ subsets: ["latin"] });
const drawerWidth = 150;
const navItems = ["Home", "About", "Contact"];
const themeBGColor = '#01411C';


export default function Layout({ children, class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links }) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const router = useRouter();

  // Dynamic props based on the current page URL (adjust as needed)
  //const { class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links } = router.query;


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: '#fff',
          height: 50
        }}
      >
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ color: themeBGColor, fontWeight: 'bold', textAlign: 'center' }}>
        Pakistan Past Papers
        </Typography>
        </Toolbar>
      </AppBar>
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: themeBGColor,
          height: 50, marginTop: '50px', borderColor: themeBGColor
        }}
      >
{router.pathname !== '/' && (
              <LinkPath textColor={'#fff'}
                class_id={class_id}
                class_name={class_name}
                subject_id={subject_id}
                subject_name={subject_name}
                board_id={board_id}
                board_name={board_name}
                year={year}
                No_Of_Links={No_Of_Links} // Adjust dynamically based on the page
              />
            )}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: themeBGColor
              
             },
          }}
        >
          <Box sx={{marginTop: '60px'}}>
        <Stack sx={{ backgroundColor: '#fff', height: 50, borderBottomLeftRadius: 20, 
          alignItems: 'center', marginTop: 5 }}>
        <Typography sx={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', textDecoration: 'underline', 
          color: themeBGColor }}>Class</Typography>
      </Stack>
        </Box>
        <div style={{marginTop: 30}}>
        <DrawerComponent />
        </div>
        </Drawer>

      <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: themeBGColor,
          borderColor: themeBGColor
         }
      }}
      open>
        
        <Box sx={{marginTop: '60px'}}>
        <Stack sx={{ backgroundColor: '#fff', height: 50, borderBottomLeftRadius: 20, 
          alignItems: 'center', marginTop: 5 }}>
        <Typography sx={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', textDecoration: 'underline', 
          color: themeBGColor }}>Class</Typography>
      </Stack>
        </Box>
        <div style={{marginTop: 30}}>
        <DrawerComponent />
        </div>
      

    </Drawer>
      </Box>
    

    
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5, mt: 8, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
              {children}
            </Box>
      
      </Box>
    
  )
}
