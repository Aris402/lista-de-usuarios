import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";


const NavigationBar = () => {
    const navBar = {
        bgcolor: 'rgb(18, 18, 18)',
        color: 'white',
    }
    const [open, setOpen] = useState(false);
    
    const [pages, setPages] = useState(0);
        
    const isOpen = () => {
        setOpen(true);
    };
    
    const isClosed = () => {
        setOpen(false);
    };
    return(
        <div>
        <Toolbar sx={navBar}>
            <IconButton onClick={open ? isClosed : isOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Navegação
            </Typography>
        </Toolbar>
    {open ? 
        <List className="nav-bar">
            <ListItemButton onClick={() => setPages(1)}>
                <ListItemText>Usuários</ListItemText>
            </ListItemButton>
            <hr></hr>
            <ListItemButton onClick={() => setPages(2)}>
                <ListItemText>Tarefas</ListItemText>
            </ListItemButton>
            <hr></hr>
            <ListItemButton onClick={() => setPages(3)}>
                <ListItemText>Posts</ListItemText>
            </ListItemButton>
        </List>
        : null
    }
        </div>
    )
}

export default NavigationBar;