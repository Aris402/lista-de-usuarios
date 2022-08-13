import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import UserTasks from "./UsersTasks";
import UsersPage from "./UsersPage";
import { useState } from "react";
import UserPosts from './UsersPosts';


const NavigationBar = () => {
    const navBar = {
        bgcolor: 'rgb(18, 18, 18)',
        color: 'white',
    }
    const [open, setOpen] = useState(false);
        
    const isOpen = () => {
        setOpen(true);
    };
    
    const isClosed = () => {
        setOpen(false);
    };
    const [user, setUser] = useState({id: 2, name: "Ervin Howell"});
	
	const [pages, setPages] = useState(0);

	const onClickTask = (user: any) => {
		setUser(user)
		setPages(2)
	}
    
    const onClickPost = (user: any) => {
        setUser(user)
        setPages(3)
    }

	const changePages = () => {
		
		if(pages == 1 || pages == 0){
			return (
					<UsersPage changeToTasks={onClickTask} changeToPosts={onClickPost}/>
				)
		}
		else if(pages == 2){
			return( 
				<UserTasks user={ user }/>
			)
		}
        else if(pages == 3){
            return (
                <UserPosts user={user} userName={user.name}/>
            )
        }
	}
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
    {changePages()}
        </div>
    )
}

export default NavigationBar;