import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CollectionsIcon from "@mui/icons-material/Collections";
import Image from "next/image";
import Link from "next/link";
import { useStyles } from "./styles";
import {useState} from "react";
import CustomContactModal from "../CustomContactModal/CustomContactModal";
import CustomRules from "../CustomRules/CustomRules";
import CustomTable from "../CustomTable/CustomTable";

const drawerWidth = 230;

const titles = [
  { label: "Strona główna", icon: <HomeIcon />, path: "/" },
  { label: "Galeria", icon: <CollectionsIcon />, path: "/gallery" },
  { label: "Sala cardio", icon: <LocalFireDepartmentIcon />, path: "/cardio" },
  { label: "Sklep", icon: <ShoppingBasketIcon />, path: "/shop" },
];

export default function CustomDrawer() {
  const [openModal, setOpenModal] = useState(false);
    const [openRules, setOpenRules] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);

    const handleOpenPrice = () => setOpenPrice(true);
    const handleClosePrice = () => setOpenPrice(false);
    const handleOpenRules = () => setOpenRules(true);
    const handleCloseRules = () => setOpenRules(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
  const styles = useStyles();
  return (
    <Box sx={{ display: "flex", padding: 0, height: 48 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#ecf0f1",
          borderBottom: "5px solid #0A1929",
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <Image
            src="/img/header-trans.png"
            alt="logo"
            width={140}
            height={90}
            style={{ color: "white" }}
          />
          <Typography
            variant="h4"
            noWrap
            component="div"
            style={{ flexGrow: 1, color: "#0A1929" }}
          >
            Siłownia Krzepa
              <Typography> <span>ul. Kraszewskiego 8a 22-200 Włodawa woj. Lubelskie</span></Typography>
          </Typography>
            <Box>
                <Typography style={{margin: '0 auto', textAlign: 'center', marginBottom: 1, fontWeight: 'bold', color: "#0A1929", fontSize: 14}}>GODZINY OTWARCIA</Typography>
                <Typography style={{color: "#0A1929", fontSize: 12}}>Poniedziałek - Piątek 10.00 - 21.00</Typography>
                <Typography style={{color: "#0A1929", fontSize: 12}}>Sobota 10.00 - 19.00</Typography>
                <Typography style={{color: "#0A1929", fontSize: 12}}>Niedziela nieczynne</Typography>
            </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0A1929",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List style={{ flexGrow: 1 }}>
          {titles.map(title => (
            <Link
              href={`${title.path}`}
              key={title.label}
              className={styles.links}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "#FFFFFF" }}>
                    {title.icon}
                  </ListItemIcon>
                  <ListItemText primary={title.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenPrice}>
                    <ListItemIcon style={{ color: "#FFFFFF" }}>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cennik" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenRules}>
                    <ListItemIcon style={{ color: "#FFFFFF" }}>
                        <FormatListNumberedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Regulamin" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenModal}>
                    <ListItemIcon style={{ color: "#FFFFFF" }}>
                        <ContactPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Kontakt" />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider style={{ backgroundColor: "#FFFFFF" }} />
        <List style={{ margin: "0 auto" }}>
          <ListItem>
            <h5 style={{ color: "#bdc3c7" }}>
              &copy; {new Date().getFullYear()} | Krzepa
            </h5>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#34495e" }}>
        <Toolbar />
      </Box>
        {openModal && <CustomContactModal open={openModal} onClose={handleCloseModal} />}
        {openRules && <CustomRules open={openRules} onClose={handleCloseRules} />}
        {openPrice && <CustomTable open={openPrice} onClose={handleClosePrice} />}
    </Box>
  );
}
